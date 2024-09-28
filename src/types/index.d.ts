export interface IProducto {
  id: number;
  idCategoria: number;
  disponible: boolean;
  nombre: string;
  precio: number;
}

export interface ICategoria {
  id: number;
  nombre: string;
  producto: IProducto[];
}
