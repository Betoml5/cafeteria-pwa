/* eslint-disable @typescript-eslint/no-unused-vars */

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

// const cacheFirst = async (request: Request): Promise<Response> => {
//   try {
//     const cache = await caches.open(CACHE_NAME);
//     const matching = await cache.match(request);
//     if (matching) return matching;
//     // If we don't have a match, we need to fetch the resource from the network
//     const response = await fetch(request);
//     // Once we have the response, we need to add it to the cache
//     cache.put(request, response.clone());
//     return response;
//   } catch (error: any) {
//     console.log(error);
//     return new Response("Error", { status: 500 });
//   }
// };

async function networkFirst(request: Request): Promise<Response> {
  const cache = await caches.open(CACHE_NAME);
  try {
    const respuesta = await fetch(request);
    if (respuesta.ok) {
      cache.put(request, respuesta.clone());
    }
    return respuesta;
  } catch (error: any) {
    console.log(error);
    const response = await cache.match(request);
    if (response) {
      return response;
    } else {
      return new Response("Recurso no disponible en caché ni en la red", {
        status: 503,
      });
    }
  }
}

async function networkOnly(request: Request): Promise<Response> {
  try {
    const respuesta = await fetch(request);
    return respuesta;
  } catch (error: any) {
    return new Response("Recurso no disponible en caché ni en la red", {
      status: 503,
    });
  }
}

self.addEventListener("install", (event: any) => {
  console.log("[Service worker installed] ");
  const extendableEvent = event as ExtendableEvent;
  extendableEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/login",
        "/admin",
        "/admin/categorias",
        "/admin/actualizar-menu",
        "/more.png",
        "/black-logo.png",
        "/manifest.webmanifest",
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      ]);
    })
  );
});

self.addEventListener("fetch", (event: any) => {
  const { request } = event;
  //   Solo maneja peticiones http(s), ignora chrome-extension://

  const url: string = request.url;
  const urlOrigin: URL = new URL(url);
  console.log(urlOrigin.pathname);
  if (
    url.includes("/login") ||
    url.includes("/admin") ||
    url.includes("/admin/categorias") ||
    url.includes("/admin/actualizar-menu") ||
    url.includes("/api/categorias") ||
    url.includes("/api/productos") ||
    url.includes(".webp") ||
    url.includes(".png") ||
    url.includes(".jpg") ||
    url.includes(".svg") ||
    url.includes(
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    )
  ) {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

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
