import React, { useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-5xl text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
