import { useMutation } from "react-query";
import AuthService from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useLocalStorage from "../shared/useLocalStorage";

const useAuthMutation = () => {
  const navigate = useNavigate();
  const [, setToken] = useLocalStorage("token", null);
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => AuthService.login(username, password),
    onSuccess: (data) => {
      setToken(data);
      navigate("/admin");
    },
    onError: () => {
      toast.error("Credenciales incorrectas");
      navigate("/login");
    },
  });
  return mutation;
};

export default useAuthMutation;
