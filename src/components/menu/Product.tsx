import { FC } from "react";
import { IProducto } from "../../types";

interface Props {
  product: IProducto;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <div className="flex border gap-x-8 border-gray-500/70 bg-secondary-color rounded-lg  min-w-96 max-w-96 h-64">
      <img
        className={`w-1/2  h-32 self-center object-cover ${
          !product.disponible && "filter grayscale"
        }`}
        src={`https://pwabrd.labsystec.net/producto/${product.id}.webp?lastUpdate=${product.lastUpdate}`}
        alt={product.nombre}
      />
      <div className="flex flex-col justify-center  w-1/2  mt-4">
        <h3 className="text-2xl mb-4">{product.nombre}</h3>
        <p>
          {product.disponible ? (
            <span className="text-green-500 text-xl">Disponible</span>
          ) : (
            <span className="text-red-500 text-xl">Agotado</span>
          )}
        </p>
        <p className="text-green-700 font-bold text-2xl my-4">
          ${product.precio.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Product;
