const CategoriasTable = ({ categorias }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold mr-4">Categorías</h2>
          <button className="btn py-1 self-end">Agregar</button>
        </div>
        <select name="" id="" className="select">
          <option value="">Categoría</option>
        </select>
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
          {categorias.map((item) => (
            <tr>
              <td className="td">{item.name}</td>
              <td className="td">{item.products.length}</td>
              <td className="td">
                <button className="mr-4">
                  <img src="/delete.png" alt="Eliminar" />
                </button>
                <button>
                  <img src="/edit.png" alt="Editar" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasTable;
