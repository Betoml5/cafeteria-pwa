import { useState } from "react";
import Categoria from "../../components/admin/categoria/Categoria";
import useCategorias from "../../hooks/categorias/useCategorias";
import { ICategoria } from "../../types";
import Modal from "../../components/shared/Modal";
import UpdateCategoriaForm from "../../components/admin/forms/UpdateCategoriaForm";
import DeleteCategoriaForm from "../../components/admin/forms/DeleteCategoriaForm";
import { MODALS_NAMES } from "../../constants";
import CreateCategoriaForm from "../../components/admin/forms/CreateCategoriaForm";

const CategoriasView = () => {
  const [selectedCategoria, setSelectedCategoria] = useState<ICategoria | null>(
    null
  );
  const [action, setAction] = useState<string | null>(null);
  const categorias = useCategorias();

  return (
    <div className="p-4">
      {action === MODALS_NAMES.CREATE_CATEGORIA && (
        <Modal
          isOpen={action === MODALS_NAMES.CREATE_CATEGORIA}
          onClose={() => {
            setAction(null);
            setSelectedCategoria(null);
          }}
          title="Agregar categoría"
        >
          <CreateCategoriaForm />
        </Modal>
      )}
      {action === MODALS_NAMES.EDIT_CATEGORIA && (
        <Modal
          isOpen={!!selectedCategoria}
          onClose={() => {
            setSelectedCategoria(null);
            setAction(null);
          }}
          title="Editar categoría"
        >
          <UpdateCategoriaForm categoria={selectedCategoria as ICategoria} />
        </Modal>
      )}
      {action === MODALS_NAMES.DELETE_CATEGORIA && (
        <Modal
          isOpen={!!selectedCategoria}
          onClose={() => {
            setSelectedCategoria(null);
            setAction(null);
          }}
          title="Eliminar categoría"
        >
          <DeleteCategoriaForm
            setSelectedCategoria={setSelectedCategoria}
            categoria={selectedCategoria as ICategoria}
          />
        </Modal>
      )}
      <h3 className="text-3xl font-semibold mb-4">Categorias</h3>
      <div className="flex gap-2 flex-wrap">
        {categorias.data?.map((item) => (
          <Categoria
            categoria={item}
            key={item.id}
            onEdit={() => setAction(MODALS_NAMES.EDIT_CATEGORIA)}
            onDelete={() => setAction(MODALS_NAMES.DELETE_CATEGORIA)}
            onContextMenu={() => setSelectedCategoria(item)}
          />
        ))}
      </div>
      <button
        onClick={() => setAction(MODALS_NAMES.CREATE_CATEGORIA)}
        className="absolute bottom-2 right-4 p-2 bg-amber-900 rounded-full text-white text-3xl hover:opacity-90"
      >
        <img src="/add.svg" alt="add" className="w-10 h-10 lg:w-12 lg:h-12" />
      </button>
    </div>
  );
};

export default CategoriasView;
