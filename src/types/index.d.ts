export interface IProducto {
  categoria: ICategoria;
  id: number;
  nombre: string;
  precio: number;
  idCategoria: number;
  disponible: boolean;
}
export interface ICategoria {
  productos: Producto[];
  id: number;
  nombre: string;
}
