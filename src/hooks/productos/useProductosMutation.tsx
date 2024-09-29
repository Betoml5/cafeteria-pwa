import { useMutation, useQueryClient } from "react-query";
import ProductoService from "../../services/Producto";
import { toast } from "sonner";

const useProductosMutation = () => {
  const client = useQueryClient();

  const createMutation = useMutation({
    mutationKey: ["productos"],
    mutationFn: ProductoService.create,
    onSuccess: () => {
      toast("Producto creado");
      client.invalidateQueries(["productos"]);
    },
    onError: () => {
      toast.error("Error al crear producto");
    },
  });

  return {
    createMutation,
  };
};

export default useProductosMutation;
