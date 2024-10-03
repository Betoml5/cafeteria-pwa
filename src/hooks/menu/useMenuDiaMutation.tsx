/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import MenuDiaService from "../../services/MenuDia";
import { useMutation, useQueryClient } from "react-query";

const useMenuDiaMutation = () => {
  const client = useQueryClient();

  const update = useMutation({
    mutationFn: MenuDiaService.create,
    onSuccess: () => {
      toast.success("Menu actualizado");
      client.invalidateQueries(["menu"]);
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  return {
    update,
  };
};

export default useMenuDiaMutation;
