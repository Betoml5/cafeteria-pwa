import { useMutation } from "react-query";
import ProductoService from "../../services/Producto";

const useProductosMutation = () => {
  const createMutation = useMutation({
    mutationKey: ["productos"],
    mutationFn: ProductoService.create,
  });

  return {
    createMutation,
  };
};

export default useProductosMutation;
