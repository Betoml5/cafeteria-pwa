import { FC } from "react";
import { IProducto } from "../../../types";

interface Props {
  producto: IProducto;
}

const Product: FC<Props> = ({ producto }) => {
  return (
    <div
      className={`flex flex-col bg-white  px-10 py-4  rounded-lg m-2 min-w-40 ${
        producto.disponible
          ? "border-b-green-500 border-b-4"
          : "border-b-red-500 border-b-4"
      }`}
    >
      <div>
        <img
          className="w-32 h-32 object-contain self-center"
          src={`https://pwabrd.labsystec.net/producto/${producto.id}.webp`}
          alt={producto.nombre}
        />
      </div>
      <div>
        <h3>{producto.nombre}</h3>
      </div>
    </div>
  );
};

export default Product;
