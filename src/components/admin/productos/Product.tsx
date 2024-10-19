import { FC } from "react";
import { IProducto } from "../../../types";
import { Menu, Item, useContextMenu, contextMenu } from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

interface Props {
  producto: IProducto;
  onDelete: () => void;
  onEdit: () => void;
  onContextMenu: () => void;
}
const MENU_ID = "menu-id-producto";

const Product: FC<Props> = ({
  producto,
  onDelete,
  onEdit,
  onContextMenu: onCtx,
}) => {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function displayMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    show({
      event: e,
    });
    onCtx();
  }
  const onContextMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    contextMenu.show({
      id: MENU_ID,
      event: e,
    });
    onCtx();
  };

  return (
    <>
      <Menu id={MENU_ID} key={producto.id}>
        <Item onClick={onEdit}>Editar</Item>
        <Item onClick={onDelete}>Eliminar</Item>
      </Menu>
      <div
        onContextMenu={displayMenu}
        className={`relative  flex flex-col bg-white  px-10 py-4  rounded-lg m-2 min-w-40 ${
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
        <button className="absolute right-2 top-2" onClick={onContextMenu}>
          <img src="/more.png" alt="more" className="w-6 h-6 rotate-90" />
        </button>
      </div>
    </>
  );
};

export const ProductContextMenu = () => {
  return <div>ProductContextMenu</div>;
};

export default Product;
