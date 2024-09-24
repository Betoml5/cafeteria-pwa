import { FC } from "react";

interface Props {
  product: any;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col  border border-gray-500/70 bg-secondary-color rounded-lg p-4 min-w-64 snap-center">
      <img
        className="w-24 h-24 self-center"
        src={product.image}
        alt={product.name}
      />
      <h3 className="text-2xl">{product.name}</h3>
      <div className="flex justify-between mt-4">
        <p>
          {product.isAvaliable ? (
            <span className="text-green-500 text-xl">Disponible</span>
          ) : (
            <span className="text-red-500 text-xl">Agotado</span>
          )}
        </p>
        <p className="text-green-700 font-bold text-2xl">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Product;
