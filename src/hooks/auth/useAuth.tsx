import useLocalStorage from "../shared/useLocalStorage";

const useAuth = () => {
  const [token] = useLocalStorage("token", null);
  return token;
};

export default useAuth;
