import AdminProduct from "../../components/admin/productos/Product";

const UpdateDayMenu = () => {
  // const handleSave = () => {};

  return (
    <div className="m-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Menu del actual</p>
        <button className="btn">Guardar</button>
      </div>

      <div className="flex overflow-auto">
        <AdminProduct />
        <AdminProduct />
      </div>
      <p className="text-2xl font-semibold">Catalogo</p>
      <div className="flex overflow-x-auto">
        <AdminProduct />
        <AdminProduct />
        <AdminProduct />
        <AdminProduct />
      </div>
    </div>
  );
};

export default UpdateDayMenu;
