import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../admin/shared/Drawer";
import useOnlineStatus from "../../hooks/shared/useOnlineStatus";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isOnline = useOnlineStatus();

  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isOnline) {
      console.log(isOnline);
      pRef.current?.classList.add("bg-green-600");
      pRef.current?.classList.remove("hidden");
      setTimeout(() => {
        console.log("setTimeout");
        pRef.current?.classList.add("hidden");
      }, 5000);
    }
  }, [isOnline]);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-primary-color text-white">
        <Link to="/" className="flex items-center gap-x-2">
          <h1 className="text-2xl font-bold">ITESRC</h1>
        </Link>
        <button onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu" />
        </button>
        <Drawer open={open} setOpen={setOpen} />
      </header>
      <div className={`text-white   text-center ${!isOnline && "bg-red-600"}`}>
        {!isOnline && <p className="py-2">No estas conectado a internet</p>}
        <p ref={pRef} className="hidden py-2">
          Estas conectado a internet
        </p>
      </div>
    </>
  );
};

export default Header;
