import { Link } from "react-router-dom";
import useCategorias from "../../hooks/categorias/useCategorias";
import Loader from "../shared/Loader";

const Categories = () => {
  const categorias = useCategorias();

  if (categorias.isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );

  return (
    <>
      {categorias.data?.map((categoria) => (
        <Link
          to={`categoria?query=${categoria.nombre.replace(/\s/g, "-")}`}
          className="flex flex-col items-center"
        >
          <div className="flex items-center bg-white p-4 rounded-full border border-gray-700/30 lg:p-6">
            <img
              src={`https://pwabrd.labsystec.net/categorias/${categoria.id}.webp`}
              alt=""
              className="w-8 h-8 object-contain lg:w-20 lg:h-20"
            />
          </div>
          <p className="text-center">{categoria.nombre}</p>
        </Link>
      ))}
      {/* <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/candy.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/soda.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/chips.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/dish.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/more.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link> */}
    </>
  );
};

export default Categories;
