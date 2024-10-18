import { FC } from "react";
import { IMenuProduct } from "../../../types";

interface Props {
  producto: IMenuProduct;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  selected: boolean;
}

const Product: FC<Props> = ({ producto, onChange, selected }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-500/70 rounded-lg p-4 m-2 min-w-40 snap-center">
      <img
        className="w-32 h-32 object-contain self-center"
        src={`https://pwabrd.labsystec.net/producto/${producto.producto.id}.webp`}
        alt={producto.producto.nombre}
      />
      <div>
        <h3>{producto.producto.nombre}</h3>
      </div>
    </div>
  );
};

export default Product;
