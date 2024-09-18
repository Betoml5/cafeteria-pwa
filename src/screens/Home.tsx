import CreateCategoriaForm from "../components/admin/forms/CreateCategoriaForm";
import DayMenu from "../components/menu/DayMenu";
import products from "../data.json";
import categorias from "../categorias.json";
import CategoriasTable from "../components/admin/categoria/CategoriasTable";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div>
      {/* <CreateCategoriaForm /> */}
      {/* <CategoriasTable categorias={categorias} /> */}
      <Hero />
      <div className="p-4">
        <h1 className="text-center font-bold text-5xl my-4">Menú del dia</h1>
        <div className="flex overflow-x-auto dayMenu snap-proximity overscroll-x-contain md:flex-wrap md:justify-center">
          <DayMenu products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
