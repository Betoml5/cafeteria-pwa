import { useMutation, useQueryClient } from "react-query";
import CategoriaService from "../../services/Categoria";
import { toast } from "sonner";

const useCategoriasMutation = () => {
  const client = useQueryClient();

  const createMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.create,
    onSuccess: () => {
      toast("Categoría creada");
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al crear categoría");
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.delete,
    onSuccess: () => {
      toast("Categoría eliminada");
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al eliminar categoría");
    },
  });

  const updateMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.update,
    onSuccess: () => {
      toast("Categoria actualizada");
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al actualizar Categoría");
    },
  });

  return {
    createMutation,
    deleteMutation,
    updateMutation,
  };
};

export default useCategoriasMutation;
