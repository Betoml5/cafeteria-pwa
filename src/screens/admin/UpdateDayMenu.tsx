import AdminProduct from "../../components/admin/productos/Product";
import useProductos from "../../hooks/productos/useProductos";
import productosMock from "../../data.json";
const UpdateDayMenu = () => {
  // const handleSave = () => {};
  const productos = useProductos();

  if (productos.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Menu del actual</p>
        <button className="btn">Guardar</button>
      </div>

      <div className="flex overflow-auto">
        <AdminProduct producto={productosMock[0]} />
        <AdminProduct producto={productosMock[1]} />
      </div>
      <p className="text-2xl font-semibold">Catalogo</p>
      <div className="flex overflow-x-auto">
        {productos.data?.map((item) => (
          <AdminProduct producto={item} />
        ))}
      </div>
    </div>
  );
};

export default UpdateDayMenu;
