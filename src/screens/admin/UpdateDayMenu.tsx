import { useEffect, useState } from "react";
import AdminProduct from "../../components/admin/productos/Product";
import useMenuDia from "../../hooks/menu/useMenuDia";
import useMenuDiaMutation from "../../hooks/menu/useMenuDiaMutation";
import useProductos from "../../hooks/productos/useProductos";
import Loader from "../../components/shared/Loader";
const UpdateDayMenu = () => {
  const productos = useProductos();
  const { update } = useMenuDiaMutation();
  const menu = useMenuDia();

  const [selected, setSelected] = useState<number[]>([]);

  const catalogo = productos.data?.filter(
    (item) => !menu.data?.find((menuItem) => menuItem.idProducto === item.id)
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setSelected((prevState) => {
      if (e.target.checked) return [...prevState, id];
      return prevState.filter((item) => item !== id);
    });
  };

  const handleSave = () => {
    update.mutate(selected);
  };

  useEffect(() => {
    if (menu.data) {
      setSelected(menu.data.map((item) => item.idProducto));
    }

    console.log(selected);
  }, [menu.data, selected]);

  if (productos.isLoading || menu.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  console.log(selected);

  return (
    <div className="m-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Menu del actual</p>
        <button
          className="btn"
          onClick={handleSave}
          disabled={update.isLoading}
        >
          {update.isLoading ? "Guardando..." : "Guardar"}
        </button>
      </div>

      <div className="flex overflow-auto">
        {menu.data?.map((item) => (
          <AdminProduct
            producto={item.producto}
            onChange={(e) => onChange(e, item.idProducto)}
            selected={selected.includes(item.idProducto)}
            key={item.idProducto}
          />
        ))}
        {/* <AdminProduct producto={productosMock[0]} /> */}
        {/* <AdminProduct producto={productosMock[1]} /> */}
      </div>
      <p className="text-2xl font-semibold">Catalogo</p>
      <div className="flex overflow-x-auto">
        {catalogo?.length === 0 && (
          <div>
            <p className="text-xl mt-4">No hay productos para mostrar...</p>
          </div>
        )}
        {catalogo?.map((item) => (
          <div className="flex flex-col bg-white border border-gray-500/70 rounded-lg p-4 m-2 min-w-40 snap-center">
            <img
              className="w-32 h-32 object-contain self-center"
              src={`https://pwabrd.labsystec.net/producto/${item.id}.webp`}
              alt={item.nombre}
            />
            <div>
              <h3>{item.nombre}</h3>

              <input
                className="mr-2"
                type="checkbox"
                onChange={(e) => onChange(e, item.id)}
              />
              <label htmlFor="isAvaliable">Seleccionar</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateDayMenu;
