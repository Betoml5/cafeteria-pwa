export interface IProducto {
  id: number;
  idCategoria: number;
  disponible: boolean;
  nombre: string;
  precio: number;
}

export interface ICategoria {
  productos: Producto[];
  id: number;
  nombre: string;
  icono: string;
}
