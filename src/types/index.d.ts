export interface IProducto {
  categoria: ICategoria;
  id: number;
  nombre: string;
  precio: number;
  idCategoria: number;
  disponible: boolean;
  lastUpdate: string;
}
export interface ICategoria {
  productos: Producto[];
  id: number;
  nombre: string;
  lastUpdate: string;
}

export interface IMenuProduct {
  id: number;
  idProducto: number;
  producto: IProducto;
}
