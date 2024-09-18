const OutOfStockProducts = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold ">Productos Agotados</h2>
        <select name="pagination" id="pagination" className="select">
          <option value="">Pagina 1</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Nombre</th>
            <th className="th">Categoría</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td">Coca Cola</td>
            <td className="td">Bebidas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OutOfStockProducts;
