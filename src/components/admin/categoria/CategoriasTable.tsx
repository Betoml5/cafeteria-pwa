import { Link } from "react-router-dom";
import { ICategoria } from "../../../types";
import { FC, useMemo, useState } from "react";

interface Props {
  categorias: ICategoria[];
}

const CategoriasTable: FC<Props> = ({ categorias }) => {
  const [search, setSearch] = useState("");
  const filteredCategorias = useMemo(() => {
    if (search === "") {
      return categorias;
    } else {
      return categorias.filter((item) =>
        item.nombre.toLowerCase().includes(search.toLowerCase())
      );
    }
  }, [search, categorias]);
  return (
    <div className="overflow-x-auto">
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
              <td className="td">
                <Link className="underline" to={`/admin/categorias/${item.id}`}>
                  {item.nombre}
                </Link>
              </td>
              <td className="td">{item.productos.length}</td>
              <td className="td">
                <button className="mr-4">
                  <img className="w-8 h-8" src="/delete.png" alt="Eliminar" />
                </button>
                <button>
                  <img className="w-8 h-8" src="/edit.png" alt="Editar" />
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td className="td text-right" colSpan={3}>
              <button className="underline">Agregar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasTable;
