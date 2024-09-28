import { FC } from "react";
import { IProducto } from "../../types";

interface Props {
  product: IProducto;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col  border border-gray-500/70 bg-secondary-color rounded-lg p-4 min-w-64 snap-center">
      <img
        className="w-24 h-24 self-center"
        src="/dish.png"
        alt={product.nombre}
      />
      <h3 className="text-2xl">{product.nombre}</h3>
      <div className="flex justify-between mt-4">
        <p>
          {product.disponible ? (
            <span className="text-green-500 text-xl">Disponible</span>
          ) : (
            <span className="text-red-500 text-xl">Agotado</span>
          )}
        </p>
        <p className="text-green-700 font-bold text-2xl">
          ${product.precio.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Product;
