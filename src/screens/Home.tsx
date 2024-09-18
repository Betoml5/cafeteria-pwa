import CreateCategoriaForm from "../components/admin/forms/CreateCategoriaForm";
import DayMenu from "../components/menu/DayMenu";
import products from "../data.json";
import categorias from "../categorias.json";
import CategoriasTable from "../components/admin/categoria/CategoriasTable";
const Home = () => {
  return (
    <div>
      <CreateCategoriaForm />
      <CategoriasTable categorias={categorias} />
      {/* <DayMenu products={products} /> */}
    </div>
  );
};

export default Home;
