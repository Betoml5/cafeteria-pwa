import { FC } from "react";
import useProductosMutation from "../../../hooks/productos/useProductosMutation";
import { IProducto } from "../../../types";

interface Props {
  producto: IProducto;
}

const DeleteProductoForm: FC<Props> = ({ producto }) => {
  const { deleteMutation } = useProductosMutation();

  const handleClick = () => {
    deleteMutation.mutate(producto.id);
  };

  return (
    <div>
      <h1>¿Estas seguro que deseas eliminar este producto?</h1>
      <div className="flex justify-center gap-x-4 my-4">
        <button className="btn bg-red-500" onClick={handleClick}>
          Aceptar
        </button>
        <button className="btn bg-blue-500" onClick={() => {}}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default DeleteProductoForm;
