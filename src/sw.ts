/* eslint-disable @typescript-eslint/no-explicit-any */
import { CACHE_NAME } from "./constants/cache";
import CategoriaService from "./services/Categoria";
import ProductoService from "./services/Producto";
import UpdateService from "./services/Update";

// Refresh cache every 8 hours
const cacheExpiration = 8 * 60 * 60 * 1000;

// Cache-control header for caching
setInterval(() => {
  checkLastUpdates();
}, cacheExpiration);

// Comprueba si los datos de productos y categorías han cambiado
const checkLastUpdates = async () => {
  const response = await UpdateService.lastModified();

  const lastProductsUpdate = localStorage.getItem("lastProductsUpdate");
  const lastCategoriesUpdate = localStorage.getItem("lastCategoriesUpdate");

  if (response.productos !== lastProductsUpdate) {
    const productos = await ProductoService.get();
    caches.open(CACHE_NAME).then((cache) => {
      cache.put("/api/productos", new Response(JSON.stringify(productos)));
    });
  }

  if (response.categorias !== lastCategoriesUpdate) {
    const categorias = await CategoriaService.get();
    caches.open(CACHE_NAME).then((cache) => {
      cache.put("/api/categorias", new Response(JSON.stringify(categorias)));
    });
  }

  localStorage.setItem("lastProductsUpdate", response.productos);
  localStorage.setItem("lastCategoriesUpdate", response.categorias);
};

// Estrategia de caché para recursos estáticos
const cacheFirst = async (request: Request): Promise<Response> => {
  try {
    const cache = await caches.open(CACHE_NAME);
    const matching = await cache.match(request);
    if (matching) return matching;

    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error: any) {
    console.error("Error en cacheFirst:", error);
    return new Response("Error en cacheFirst", { status: 500 });
  }
};

// Estrategia de caché para recursos dinámicos
const networkFirst = async (request: Request): Promise<Response> => {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error: any) {
    console.error("Error en networkFirst:", error);
    const cachedResponse = await cache.match(request);
    return (
      cachedResponse || new Response("No disponible en caché", { status: 503 })
    );
  }
};

// Diccionario para rutas y estrategias de caché
const estrategias: { [key: string]: (request: Request) => Promise<Response> } =
  {
    "/api/categorias": cacheFirst,
    "/api/productos": cacheFirst,
    "/api/actualizar-menu": networkFirst,
  };

// Instalación del SW y caché de recursos estáticos iniciales
self.addEventListener("install", (event: any) => {
  console.log("[Service Worker] Instalado");
  const resourcesToCache = [
    "/",
    "/index.html",
    "/login",
    "/admin",
    "/src/main.tsx", // Asegúrate de que el archivo main.tsx esté en caché
    "/admin/categorias",
    "/admin/actualizar-menu",
    "/more.png",
  ];
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(resourcesToCache))
  );
});

// Activa el SW y elimina cachés viejos
self.addEventListener("activate", (event: any) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  console.log("[Service Worker] Activado y cachés antiguos eliminados");
});

// Intercepta y maneja las solicitudes de recursos
self.addEventListener("fetch", (event: any) => {
  const { request } = event;
  if (request.url.startsWith("http")) {
    const urlPath = new URL(request.url).pathname;
    const estrategia = estrategias[urlPath] || networkFirst;
    event.respondWith(estrategia(request));
  }
});
