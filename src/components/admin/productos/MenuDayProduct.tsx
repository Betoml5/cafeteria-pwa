import { FC } from "react";
import { IMenuProduct } from "../../../types";

interface Props {
  producto: IMenuProduct;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  selected: boolean;
}

const MenuDayProduct: FC<Props> = ({
  producto: { producto },
  onChange,
  selected,
}) => {
  return (
    <div
      className={`relative  flex flex-col bg-white  p-4  rounded-lg m-2 min-w-40 border border-gray-700/50 `}
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
      <div>
        <input
          className=" mr-2"
          type="checkbox"
          onChange={(e) => onChange(e, producto.id)}
          checked={selected}
        />
        <label htmlFor="isAvaliable">Seleccionar</label>
      </div>
    </div>
  );
};

export default MenuDayProduct;
