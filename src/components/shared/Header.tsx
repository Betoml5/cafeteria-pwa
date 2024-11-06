import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../admin/shared/Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-primary-color text-white">
      <Link to="/" className="flex items-center gap-x-2">
        <h1 className="text-2xl font-bold">ITESRC</h1>
      </Link>
      <button onClick={() => setOpen(!open)}>
        <img src="/menu.png" alt="menu" />
      </button>
      <Drawer open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
