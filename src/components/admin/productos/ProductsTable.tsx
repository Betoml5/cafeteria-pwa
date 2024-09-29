/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useMemo, useState } from "react";
import Switch from "../../shared/Switch";
import { IProducto } from "../../../types";
import Modal from "../../shared/Modal";
import UpdateProductoForm from "../forms/UpdateProductoForm";
import DeleteProductoForm from "../forms/DeleteProductoForm";

interface Props {
  productos: IProducto[];
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductsTable: FC<Props> = ({ productos, onAdd, onEdit, onDelete }) => {
  const [filter, setFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<IProducto | null>(
    null
  );

  const onChange = (e: any) => {
    console.log(e);
  };

  const filteredProducts = useMemo(() => {
    if (filter === "") return productos;

    return productos.filter((item) =>
      item.nombre.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, productos]);

  return (
    <div className="overflow-x-auto">
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title="Editar producto"
      >
        <UpdateProductoForm producto={selectedProduct as IProducto} />
      </Modal>
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title="Eliminar producto"
      >
        <DeleteProductoForm producto={selectedProduct as IProducto} />
      </Modal>
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
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="all"
            onChange={() => {
              console.log("object");
            }}
          >
            <input
              type="checkbox"
              name="all"
              id="all"
              className="sr-only peer"
            />

            <span className="text-sm font-medium bg-primary-color px-4 py-2 text-white rounded-md">
              Todos
            </span>
          </label>
          <label
            htmlFor="all"
            onChange={() => {
              console.log("object");
            }}
          >
            <input
              type="checkbox"
              name="all"
              id="all"
              className="sr-only peer"
            />

            <span className="ml-3 text-sm font-medium  px-4 py-2 text-black rounded-md border border-black bg-white">
              Agotados
            </span>
          </label>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Nombre</th>
            <th className="th">Categoría</th>
            <th className="th">Acciones</th>
            <th className="th">Disponible</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 && (
            <tr>
              <td className="td text-center" colSpan={5}>
                <p className="text-center">
                  No hay productos que coincidan con la búsqueda
                </p>
              </td>
            </tr>
          )}
          {filteredProducts.map((item) => (
            <tr>
              <td className="td">{item.nombre}</td>
              <td className="td">{item.idCategoria}</td>
              <td className="td">
                <div>
                  <button
                    onClick={() => {
                      onDelete();
                      setSelectedProduct(item);
                    }}
                  >
                    <img src="/delete.png" alt="Eliminar" />
                  </button>
                  <button
                    onClick={() => {
                      onEdit();
                      setSelectedProduct(item);
                    }}
                  >
                    <img src="/edit.png" alt="Editar" />
                  </button>
                </div>
              </td>
              <td className="td">
                <Switch checked={item.disponible} onChange={onChange} />
              </td>
            </tr>
          ))}

          <tr>
            <td className="td text-right" colSpan={5}>
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

export default ProductsTable;
