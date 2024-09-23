import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-2">
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full p-4">
          <img className="w-16 h-16 object-contain" src="/candy.png" />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full p-4">
          <img className="w-16 h-16 object-contain" src="/soda.png" />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full p-4">
          <img className="w-16 h-16 object-contain" src="/chips.png" />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full p-4">
          <img className="w-16 h-16 object-contain" src="/dish.png" />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full p-4">
          <img className="w-16 h-16 object-contain" src="/more.png" />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
    </div>
  );
};

export default Categories;
