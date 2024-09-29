import { useMutation, useQueryClient } from "react-query";
import CategoriaService from "../../services/Categoria";
import { toast } from "sonner";

const useCategoriasMutation = () => {
  const client = useQueryClient();

  const createMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.create,
    onSuccess: () => {
      toast("Producto creado");
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al crear producto");
    },
  });

  return {
    createMutation,
  };
};

export default useCategoriasMutation;
