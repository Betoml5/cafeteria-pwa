/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useSession = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/admin");
    }
  }, [isAuth]);
};

export default useSession;
