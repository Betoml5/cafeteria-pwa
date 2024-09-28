import { useMutation } from "react-query";
import CategoriaService from "../../services/Categoria";

const useCategoriasMutation = () => {
  const createMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.create,
  });

  return {
    createMutation,
  };
};

export default useCategoriasMutation;
