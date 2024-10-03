import { ICategoria } from "../../../types";
import { FC, useMemo, useState } from "react";
import UpdateCategoriaForm from "../forms/UpdateCategoriaForm";
import Modal from "../../shared/Modal";
import { MODALS_NAMES } from "../../../constants";
import DeleteCategoriaForm from "../forms/DeleteCategoriaForm";

interface Props {
  categorias: ICategoria[];
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const CategoriasTable: FC<Props> = ({
  categorias,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");
  const [action, setAction] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState<ICategoria | null>(
    null
  );

  const filteredCategorias = useMemo(() => {
    if (search === "") return categorias;

    return categorias.filter((item) =>
      item.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, categorias]);
  return (
    <div className="overflow-x-auto">
      {action === MODALS_NAMES.EDIT_CATEGORIA && (
        <Modal
          isOpen={!!selectedCategoria}
          onClose={() => setSelectedCategoria(null)}
          title="Editar categoría"
        >
          <UpdateCategoriaForm categoria={selectedCategoria as ICategoria} />
        </Modal>
      )}
      {action === MODALS_NAMES.DELETE_CATEGORIA && (
        <Modal
          isOpen={!!selectedCategoria}
          onClose={() => setSelectedCategoria(null)}
          title="Eliminar categoría"
        >
          <DeleteCategoriaForm
            setSelectedCategoria={setSelectedCategoria}
            categoria={selectedCategoria as ICategoria}
          />
        </Modal>
      )}
      <div className="flex flex-col mb-4 lg:flex-row lg:items-center lg:gap-x-4">
        <div className="relative mb-4 lg:mb-0">
          <img
            src="/search.svg"
            alt="Buscar productos"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            className="input text-black pl-10"
            placeholder="Buscar productos"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Nombre</th>
            <th className="th">Artículos</th>
            <th className="th">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {filteredCategorias.length === 0 && (
            <tr>
              <td className="td text-center" colSpan={3}>
                <p className="text-center">
                  No hay categorias que coincidan con la búsqueda
                </p>
              </td>
            </tr>
          )}
          {filteredCategorias.map((item) => (
            <tr>
              <td className="td">{item.nombre}</td>
              <td className="td">{item.productos.length}</td>
              <td className="td">
                <button
                  className="mr-4"
                  onClick={() => {
                    onDelete();
                    setSelectedCategoria(item);
                    setAction(MODALS_NAMES.DELETE_CATEGORIA);
                  }}
                >
                  <img className="w-8 h-8" src="/delete.png" alt="Eliminar" />
                </button>
                <button
                  onClick={() => {
                    onEdit();
                    setSelectedCategoria(item);
                    setAction(MODALS_NAMES.EDIT_CATEGORIA);
                  }}
                >
                  <img className="w-8 h-8" src="/edit.png" alt="Editar" />
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td className="td text-right" colSpan={3}>
              <button className="underline" onClick={onAdd}>
                Agregar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasTable;
