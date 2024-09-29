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

  const deleteMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.delete,
    onSuccess: () => {
      toast("Producto eliminado");
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al eliminar producto");
    },
  });

  const updateMutation = useMutation({
    mutationKey: ["categorias"],
    mutationFn: CategoriaService.update,
    onSuccess: () => {
      toast("Producto actualizado");
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al crear producto");
    },
  });

  return {
    createMutation,
    deleteMutation,
    updateMutation,
  };
};

export default useCategoriasMutation;
