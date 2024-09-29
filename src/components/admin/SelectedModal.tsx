import { FC } from "react";
import { MODALS_NAMES } from "../../constants";
import CreateProductoForm from "./forms/CreateProductoForm";
import Modal from "../shared/Modal";

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

      {selectedModal === MODALS_NAMES.DELETE_PRODUCT && <CreateProductoForm />}
      {selectedModal === MODALS_NAMES.CREATE_CATEGORIA && (
        <CreateProductoForm />
      )}
      {selectedModal === MODALS_NAMES.EDIT_CATEGORIA && <CreateProductoForm />}
      {selectedModal === MODALS_NAMES.DELETE_CATEGORIA && (
        <Modal isOpen={isOpen} onClose={onClose} title="Eliminar">
          <div></div>
        </Modal>
      )}
    </>
  );
};

export default SelectedModal;
