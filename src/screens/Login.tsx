import { useState } from "react";
import useAuthMutation from "../hooks/auth/useAuthMutation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useAuthMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ username, password });
  };

  return (
    <div className="max-w-xl mx-auto  p-4 my-20">
      <h3 className="text-primary-color text-5xl text-center font-bold">
        Iniciar sesión
      </h3>
      <p className="text-xl text-center my-4 font-semibold">
        Inicia sesión para gestionar la cafetería de tu institución.
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <img
            src="/mail.svg"
            alt="mail"
            className="absolute top-1/2 -translate-y-1/2 left-2  w-6 h-6"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Usuario"
            className="p-2 rounded-md border border-gray-400 w-full pl-10"
          />
        </div>
        <div className="relative">
          <img
            src="/candado.svg"
            alt="lock"
            className="absolute top-1/2 -translate-y-1/2 left-2 w-6 h-6"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
            className="p-2 rounded-md border border-gray-400 w-full pl-10"
          />
        </div>
        <button className="p-2 rounded-md bg-amber-900 text-white">
          {mutation.isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;
