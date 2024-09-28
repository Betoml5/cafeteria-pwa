import { useQuery } from "react-query";
import ProductoService from "../../services/Producto";

const useProductos = () => {
  const query = useQuery({
    queryKey: ["productos"],
    queryFn: ProductoService.get,
  });

  return query;
};

export default useProductos;
