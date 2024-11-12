import { useState, useEffect } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Escuchar los eventos de conexión y desconexión
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Limpiar los eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
