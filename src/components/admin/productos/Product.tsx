import { FC, useState } from "react";
import { IProducto } from "../../../types";
import { Menu, Item, useContextMenu, contextMenu } from "react-contexify";

import "react-contexify/dist/ReactContexify.css";
import Modal from "../../shared/Modal";
import DeleteProductoForm from "../forms/DeleteProductoForm";
import UpdateProductoForm from "../forms/UpdateProductoForm";

interface Props {
  producto: IProducto;
}
const MENU_ID = "menu-id";

const Product: FC<Props> = ({ producto }) => {
  const [action, setAction] = useState<string | null>(null);
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

  const handleEdit = () => {
    setAction("edit");
  };

  const handleDelete = () => {
    setAction("delete");
  };

  const onContextMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    contextMenu.show({
      id: MENU_ID,
      event: e,
    });
  };

  return (
    <>
      {
        <Modal
          title="Eliminar producto"
          isOpen={action === "delete"}
          onClose={() => setAction(null)}
        >
          <DeleteProductoForm producto={producto} />
        </Modal>
      }
      {
        <Modal
          title="Editar producto"
          isOpen={action === "edit"}
          onClose={() => setAction(null)}
        >
          <UpdateProductoForm producto={producto} />
        </Modal>
      }
      <div
        onContextMenu={displayMenu}
        className={`relative flex flex-col bg-white  px-10 py-4  rounded-lg m-2 min-w-40 ${
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
      <Menu id={MENU_ID}>
        <Item onClick={handleEdit}>Editar</Item>
        <Item onClick={handleDelete}>Eliminar</Item>
      </Menu>
    </>
  );
};

export const ProductContextMenu = () => {
  return <div>ProductContextMenu</div>;
};

export default Product;
