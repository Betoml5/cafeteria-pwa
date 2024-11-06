import { useMutation } from "react-query";
import AuthService from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useAuthMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => AuthService.login(username, password),
    onSuccess: () => {
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
