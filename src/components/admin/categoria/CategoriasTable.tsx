const CategoriasTable = ({ categorias }) => {
  return (
    <div className="">
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
