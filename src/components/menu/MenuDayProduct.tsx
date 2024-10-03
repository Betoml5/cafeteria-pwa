import { FC } from "react";
import { IMenuProduct } from "../../types";

interface Props {
  product: IMenuProduct;
}

const MenuDayProduct: FC<Props> = ({ product }) => {
  const producto = product.producto;
  return (
    <div className="flex flex-col  border border-gray-500/70 bg-secondary-color rounded-lg p-4 min-w-64 snap-center">
      <img
        className="w-24 h-24 self-center"
        src={`https://pwabrd.labsystec.net/producto/${producto.id}.webp`}
        alt={product.producto.nombre}
      />
      <h3 className="text-2xl">{product.producto.nombre}</h3>
      <div className="flex justify-between mt-4">
        <p>
          {product.producto.disponible ? (
            <span className="text-green-500 text-xl">Disponible</span>
          ) : (
            <span className="text-red-500 text-xl">Agotado</span>
          )}
        </p>
        <p className="text-green-700 font-bold text-2xl">
          ${product.producto.precio.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuDayProduct;
