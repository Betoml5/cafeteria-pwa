import { FC } from "react";
import { IProducto } from "../../../types";
import { Menu, Item, useContextMenu } from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

interface Props {
  producto: IProducto;
  onDelete: () => void;
  onEdit: () => void;
  onContextMenu: () => void;
  onClick: () => void;
  showContextMenu: boolean;
}
const MENU_ID = "menu-id-producto";

const Product: FC<Props> = ({
  producto,
  onDelete,
  onEdit,
  onContextMenu: onCtx,
  onClick,
  showContextMenu,
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

  return (
    <>
      {showContextMenu && (
        <Menu id={MENU_ID} key={producto.id}>
          <Item onClick={onEdit}>Editar</Item>
          <Item onClick={onDelete}>Eliminar</Item>
        </Menu>
      )}
      <div
        onClick={(e) => {
          if (showContextMenu) displayMenu(e);
          else onClick();
        }}
        onContextMenu={(e) => {
          if (showContextMenu) displayMenu(e);
        }}
        className={`relative  flex flex-col bg-white  px-10 py-4  rounded-lg m-2 min-w-40 ${
          producto.disponible
            ? "border-b-green-500 border-b-4"
            : "border-b-red-500 border-b-4"
        }`}
      >
        <div>
          <img
            className={`w-32 h-32 object-contain self-center ${
              !producto.disponible && "grayscale"
            }`}
            src={`https://pwabrd.labsystec.net/producto/${producto.id}.webp?lastUpdate=${producto.lastUpdate}`}
            alt={producto.nombre}
          />
        </div>
        <div>
          <h3>{producto.nombre}</h3>
        </div>
        {/* {showContextMenu && (
          <button className="absolute right-2 top-2" onClick={onContextMenu}>
            <img src="/more.png" alt="more" className="w-6 h-6 rotate-90" />
          </button>
        )} */}
      </div>
    </>
  );
};

export const ProductContextMenu = () => {
  return <div>ProductContextMenu</div>;
};

export default Product;
