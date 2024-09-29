import { FC } from "react";
import { MODALS_NAMES } from "../../constants";
import CreateProductoForm from "./forms/CreateProductoForm";
import Modal from "../shared/Modal";
import CreateCategoriaForm from "./forms/CreateCategoriaForm";

interface Props {
  selectedModal: string;
  isOpen: boolean;
  onClose: () => void;
}

const SelectedModal: FC<Props> = ({ selectedModal, isOpen, onClose }) => {
  return (
    <>
      {selectedModal === MODALS_NAMES.ADD_PRODUCT && (
        <Modal isOpen={isOpen} onClose={onClose} title="Agregar producto">
          <CreateProductoForm />
        </Modal>
      )}

      {selectedModal === MODALS_NAMES.CREATE_CATEGORIA && (
        <Modal isOpen={isOpen} onClose={onClose} title="Agregar categoría">
          <CreateCategoriaForm />
        </Modal>
      )}
    </>
  );
};

export default SelectedModal;
