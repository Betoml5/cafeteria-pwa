import { FC } from "react";
import { IProducto } from "../../../types";

interface Props {
  producto: IProducto;
}

const Product: FC<Props> = ({ producto }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-500/70 rounded-lg p-4 m-2 min-w-40 snap-center">
      <img
        className="w-32 h-32 object-contain self-center"
        src="/dish.png"
        alt="Producto"
      />
      <div>
        <h3>{producto.nombre}</h3>

        <input
          className="mr-2"
          type="checkbox"
          name="isAvaliable"
          id="isAvaliable"
        />
        <label htmlFor="isAvaliable">Seleccionar</label>
      </div>
    </div>
  );
};

export default Product;
