import { useState } from "react";

import useProductos from "../../hooks/productos/useProductos";
import useCategorias from "../../hooks/categorias/useCategorias";
import Loader from "../../components/shared/Loader";
import useMenuDia from "../../hooks/menu/useMenuDia";
import Product from "../../components/admin/productos/Product";
import Modal from "../../components/shared/Modal";
import CreateProductoForm from "../../components/admin/forms/CreateProductoForm";
import DeleteProductoForm from "../../components/admin/forms/DeleteProductoForm";
import UpdateProductoForm from "../../components/admin/forms/UpdateProductoForm";
import { MODALS_NAMES } from "../../constants";
import { IProducto } from "../../types";
import useProductosMutation from "../../hooks/productos/useProductosMutation";

const Dashboard = () => {
  const productos = useProductos();
  const categorias = useCategorias();
  const menu = useMenuDia();
  const { updateIsAvaliableMutation } = useProductosMutation();

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

  const productosAgotados = productos.data?.filter(
    (producto) => !producto.disponible
  );

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
          <UpdateProductoForm producto={selectedProducto as IProducto} />
        </Modal>
      )}

      <button
        onClick={() => setAction(MODALS_NAMES.ADD_PRODUCT)}
        className="absolute z-50  bottom-2 right-4 p-2 bg-amber-900 rounded-full text-white text-3xl hover:opacity-90"
      >
        <img src="/add.svg" alt="add" className="w-10 h-10 lg:w-12 lg:h-12" />
      </button>
      <div className="col-span-12 md:col-span-8 sticky top-0 z-10 pt-4">
        <div className="flex flex-col gap-x-2 md:flex-row ">
          <p className="flex items-center justify-center mb-2 px-4 py-1 bg-white rounded-md border border-gray-400 md:m-0">
            Inicio
          </p>
          <p className=" items-center hidden  md:flex">|</p>
          <div className="flex items-center flex-wrap gap-2  ">
            {categorias.data?.map((item) => (
              <p
                key={item.id}
                className="px-4 py-1 bg-white rounded-md border border-gray-400 cursor-pointer"
                onClick={() => {
                  const elemt = document.getElementById(item.nombre);
                  if (elemt) {
                    elemt.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.nombre}
              </p>
            ))}
          </div>
        </div>
      </div>

      <h3 className="col-span-full text-2xl font-semibold my-4">Inicio</h3>

      <div className="col-span-full">
        {categorias.data
          ?.filter((c) => c.productos.some((p) => p.disponible))
          ?.filter((categoria) => categoria.productos.length > 0)
          .map((categoria) => (
            <div key={categoria.id}>
              <p>{categoria.nombre}</p>

              <div className="flex dayMenu" id={categoria.nombre}>
                {categoria.productos
                  .filter((producto) => producto.disponible)
                  .map((producto: IProducto) => (
                    <Product
                      showContextMenu={false}
                      onClick={() => {
                        updateIsAvaliableMutation.mutate({
                          id: producto.id,
                          isAvaliable: !producto.disponible,
                        });
                      }}
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
        <p>Agotados</p>
        <div className="flex flex-wrap">
          {productosAgotados?.map((producto) => (
            <Product
              showContextMenu={false}
              onClick={() => {
                updateIsAvaliableMutation.mutate({
                  id: producto.id,
                  isAvaliable: !producto.disponible,
                });
              }}
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
    </div>
  );
};

export default Dashboard;
