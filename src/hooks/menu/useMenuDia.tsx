import { useQuery } from "react-query";
import MenuDiaService from "../../services/MenuDia";

const useMenuDia = () => {
  const query = useQuery({
    queryKey: ["menu"],
    queryFn: MenuDiaService.get,
  });
  return query;
};

export default useMenuDia;
