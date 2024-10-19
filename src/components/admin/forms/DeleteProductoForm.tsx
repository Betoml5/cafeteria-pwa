import { FC } from "react";
import useProductosMutation from "../../../hooks/productos/useProductosMutation";
import { IProducto } from "../../../types";

interface Props {
  producto: IProducto;
  onClose: () => void;
}

const DeleteProductoForm: FC<Props> = ({ producto, onClose }) => {
  const { deleteMutation } = useProductosMutation();

  const handleClick = () => {
    deleteMutation.mutate(producto.id);
    onClose();
  };

  return (
    <div>
      <h1 className="text-center">
        ¿Estas seguro que deseas eliminar{" "}
        <span className="font-semibold">{producto.nombre}</span>?
      </h1>
      <div className="flex justify-center gap-x-4 my-4">
        <button
          className="btn bg-red-500"
          onClick={handleClick}
          disabled={deleteMutation.isLoading}
        >
          {deleteMutation.isLoading ? "Eliminando..." : "Aceptar"}
        </button>
      </div>
    </div>
  );
};

export default DeleteProductoForm;
