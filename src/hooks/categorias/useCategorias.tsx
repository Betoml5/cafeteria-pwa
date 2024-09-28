import { useQuery } from "react-query";
import CategoriaService from "../../services/Categoria";

const useCategorias = () => {
  const query = useQuery({
    queryKey: ["categorias"],
    queryFn: CategoriaService.get,
  });

  return query;
};

export default useCategorias;
