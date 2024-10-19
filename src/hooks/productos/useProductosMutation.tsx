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
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al crear producto");
    },
  });
  const updateMutation = useMutation({
    mutationKey: ["productos"],
    mutationFn: ProductoService.update,
    onSuccess: () => {
      toast("Producto actualizado");
      client.invalidateQueries(["productos"]);
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al crear producto");
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["productos"],
    mutationFn: ProductoService.delete,
    onSuccess: () => {
      toast("Producto eliminado");
      client.invalidateQueries(["productos"]);
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al eliminar producto");
    },
  });

  const updateIsAvaliableMutation = useMutation({
    mutationKey: ["productos"],
    mutationFn: ({
      id,
      isAvaliable,
    }: {
      id: string | number;
      isAvaliable: boolean;
    }) => ProductoService.updateIsAvaliable(id, isAvaliable),
    onSuccess: () => {
      toast("Producto actualizado");
      client.invalidateQueries(["productos"]);
      client.invalidateQueries(["menu"]);
      client.invalidateQueries(["categorias"]);
    },
    onError: () => {
      toast.error("Error al crear producto");
    },
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
    updateIsAvaliableMutation,
  };
};

export default useProductosMutation;
