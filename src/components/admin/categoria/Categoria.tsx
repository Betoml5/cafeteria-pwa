import { FC } from "react";
import { ICategoria } from "../../../types";
import { contextMenu, Item, Menu, useContextMenu } from "react-contexify";

interface Props {
  categoria: ICategoria;
  onEdit: () => void;
  onDelete: () => void;
  onContextMenu: () => void;
}
const MENU_ID = "menu-id-categoria";
const Categoria: FC<Props> = ({
  categoria,
  onEdit,
  onDelete,
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
      <div
        onContextMenu={displayMenu}
        className="relative bg-white w-52 rounded-md border border-gray-600/30  md:items-center md:gap-4"
      >
        <div className="px-2 py-4 ">
          <img
            className="w-full h-28 object-contain"
            src={`https://pwabrd.labsystec.net/categorias/${categoria.id}.webp?lastUpdate=${categoria.lastUpdate}`}
            alt=""
          />
        </div>
        <div className="border px-4 py-2 rounded-t-xl">
          <p>{categoria.nombre}</p>
          <p>{categoria.productos.length} articulos</p>
        </div>
        <button onClick={onContextMenu} className="absolute bottom-2 right-0">
          <img src="/more.png" alt="more" className="w-6 h-6 rotate-90" />
        </button>
      </div>
      <Menu id={MENU_ID}>
        <Item onClick={onEdit}>Editar</Item>
        <Item onClick={onDelete}>Eliminar</Item>
      </Menu>
    </>
  );
};

export default Categoria;
