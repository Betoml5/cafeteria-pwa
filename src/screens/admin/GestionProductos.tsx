import { useState } from "react";
import useCategorias from "../../hooks/categorias/useCategorias";
import useMenuDia from "../../hooks/menu/useMenuDia";
import useProductos from "../../hooks/productos/useProductos";
import Loader from "../../components/shared/Loader";
import Modal from "../../components/shared/Modal";
import { MODALS_NAMES } from "../../constants";
import CreateProductoForm from "../../components/admin/forms/CreateProductoForm";
import DeleteProductoForm from "../../components/admin/forms/DeleteProductoForm";
import { IProducto } from "../../types";
import UpdateProductoForm from "../../components/admin/forms/UpdateProductoForm";
import Product from "../../components/admin/productos/Product";

const GestionProductos = () => {
  const productos = useProductos();
  const categorias = useCategorias();
  const menu = useMenuDia();

  const [selectedProducto, setSelectedProducto] = useState<IProducto | null>(
    null
  );
  const [action, setAction] = useState<string | null>(null);

  if (productos.isLoading || categorias.isLoading || menu.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  const onClose = () => {
    setSelectedProducto(null);
    setAction(null);
  };

  return (
    <div className="grid grid-cols-12 p-4 relative ">
      {action === MODALS_NAMES.ADD_PRODUCT && (
        <Modal
          isOpen={action === MODALS_NAMES.ADD_PRODUCT}
          onClose={onClose}
          title="Agregar producto"
        >
          <CreateProductoForm />
        </Modal>
      )}
      {action === MODALS_NAMES.DELETE_PRODUCT && (
        <Modal
          title="Eliminar producto"
          isOpen={!!selectedProducto && action === MODALS_NAMES.DELETE_PRODUCT}
          onClose={onClose}
        >
          <DeleteProductoForm
            onClose={onClose}
            producto={selectedProducto as IProducto}
          />
        </Modal>
      )}
      {action === MODALS_NAMES.EDIT_PRODUCT && (
        <Modal
          title="Editar producto"
          isOpen={!!selectedProducto && action === MODALS_NAMES.EDIT_PRODUCT}
          onClose={() => {
            setAction(null);
            setSelectedProducto(null);
          }}
        >
          <UpdateProductoForm
            onClose={onClose}
            producto={selectedProducto as IProducto}
          />
        </Modal>
      )}

      <button
        onClick={() => setAction(MODALS_NAMES.ADD_PRODUCT)}
        className="absolute z-20 bottom-2 right-4 p-2 bg-amber-900 rounded-full text-white text-3xl hover:opacity-90"
      >
        <img src="/add.svg" alt="add" className="w-10 h-10 lg:w-12 lg:h-12" />
      </button>
      <div className="col-span-12 md:col-span-8 sticky top-0 z-10 pt-4">
        <div className="flex flex-col gap-x-2 md:flex-row ">
          <p className="flex items-center justify-center mb-2 px-4 py-1 bg-white rounded-md border border-gray-400 md:m-0">
            Inicio
          </p>
          <p className=" items-center hidden  md:flex">|</p>
          <div className="flex items-center flex-wrap gap-2">
            {categorias.data?.map((item) => (
              <p
                onClick={() => {
                  const elemt = document.getElementById(item.nombre);
                  console.log(elemt);
                  if (elemt) {
                    elemt.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                key={item.id}
                className="px-4 py-1 bg-white rounded-md border border-gray-400 cursor-pointer"
              >
                {item.nombre}
              </p>
            ))}
          </div>
        </div>
      </div>

      <h3 className="col-span-full text-2xl font-semibold my-4">
        Gestión de productos
      </h3>

      <div className="col-span-full">
        {categorias.data
          ?.filter((categoria) => categoria.productos.length > 0)
          .map((categoria) => (
            <div key={categoria.id}>
              <p>{categoria.nombre}</p>

              <div className="flex dayMenu" id={categoria.nombre}>
                {categoria.productos.map((producto: IProducto) => (
                  <Product
                    showContextMenu
                    onClick={() => {}}
                    key={producto.id}
                    producto={producto}
                    onContextMenu={() => setSelectedProducto(producto)}
                    onDelete={() => setAction(MODALS_NAMES.DELETE_PRODUCT)}
                    onEdit={() => {
                      setAction(MODALS_NAMES.EDIT_PRODUCT);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GestionProductos;
