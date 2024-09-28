/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Switch from "../../shared/Switch";
import { IProducto } from "../../../types";

interface Props {
  productos: IProducto[];
}

const ProductsTable: FC<Props> = ({ productos }) => {
  const onClickMenu = (e: any) => {
    console.log(e);
    const menu = document.getElementById("menu");
    if (menu) {
      menu.style.display = "flex";
      menu.style.visibility = "visible";
      if (e.target.tagName === "TD") {
        e.target.append(menu);
      }
    }
  };

  const onChange = (e: any) => {
    console.log(e);
  };

  return (
    <div className="overflow-x-auto">
      {/* <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold ">Productos</h2>
      </div> */}

      <div
        id="menu"
        className=" gap-x-4 bg-white px-4 py-2 border-2 w-fit hidden absolute bottom-0  z-10 "
      >
        <button className="text-lg hover:opacity-80 ">Editar</button>
        <button className="text-lg hover:opacity-80 ">Eliminar</button>
      </div>

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
          {productos.map((item) => (
            <tr>
              <td className="td">{item.nombre}</td>
              <td className="td">{item.idCategoria}</td>
              <td
                onClick={onClickMenu}
                className="td flex justify-center relative"
              >
                <button className="text-3xl font-bold flex">&#8942;</button>
                {/* <div>
                <button className="mr-4">
                  <img src="/delete.png" alt="Eliminar" />
                </button>
                <button>
                  <img src="/edit.png" alt="Editar" />
                </button>
              </div> */}
              </td>
              <td className="td">
                <Switch checked={item.disponible} onChange={onChange} />
              </td>
            </tr>
          ))}

          <tr>
            <td className="td text-right" colSpan={5}>
              <button className="underline">Agregar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
