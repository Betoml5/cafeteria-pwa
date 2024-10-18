import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex  justify-between bg-black text-white text-right py-10 px-4   ">
      <p>
        <span className="font-bold">TecNM</span> © 2024
      </p>
      <Link to="/admin" className="underline"></Link>
    </div>
  );
};

export default Footer;
