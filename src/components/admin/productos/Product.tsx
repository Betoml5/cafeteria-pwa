import { FC } from "react";
import { IProducto } from "../../../types";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

interface Props {
  producto: IProducto;
}
const MENU_ID = "menu-id";

const Product: FC<Props> = ({ producto }) => {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function displayMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // put whatever custom logic you need
    // you can even decide to not display the Menu
    show({
      event: e,
    });

    console.log(e);
  }

  return (
    <>
      <div
        onContextMenu={displayMenu}
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
      <Menu id={MENU_ID}>
        <Item onClick={() => {}}>Editar</Item>
        <Item onClick={() => {}}>Eliminar</Item>
      </Menu>
    </>
  );
};

export const ProductContextMenu = () => {
  return <div>ProductContextMenu</div>;
};

export default Product;
