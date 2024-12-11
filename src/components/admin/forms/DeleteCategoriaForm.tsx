import { FC } from "react";
import useCategoriasMutation from "../../../hooks/categorias/useCategoriasMutation";
import { ICategoria } from "../../../types";

interface Props {
  categoria: ICategoria;
  setSelectedCategoria: (producto: ICategoria | null) => void;
}

const DeleteCategoriaForm: FC<Props> = ({
  categoria,
  setSelectedCategoria,
}) => {
  const { deleteMutation } = useCategoriasMutation();
  const handleClick = () => {
    deleteMutation.mutate(categoria.id);
    setSelectedCategoria(null);
  };

  return (
    <div>
      <h1 className="text-center">
        ¿Estas seguro que deseas eliminar{" "}
        <span className="font-semibold">{categoria.nombre}</span>?{" "}
        <span>
          Tiene <strong>{categoria.productos.length}</strong> productos, se
          eliminaran todos estos
        </span>
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

export default DeleteCategoriaForm;
