const Header = () => {
  return (
    <header className=" bg-hero-cafeteria  bg-center  bg-no-repeat text-white h-72 md:bg-cover">
      <nav className="flex flex-col justify-center  items-center p-4">
        <div className="flex items-center">
          <img src="/tecLogo.png" alt="Logo de TECNM" />
          <h2 className="ml-2 font-bold text-xl">ITESRC Cafetería</h2>
        </div>

        <div className="mt-10 mb-6">
          <a href="#" className="font-bold">
            Categorías
          </a>
          <a
            href="#"
            className="bg-primary-color font-bold px-4 py-2  mx-4 rounded-full"
          >
            Iniciar Sesión
          </a>
        </div>
      </nav>
      <h1 className="font-bold text-center text-2xl">
        Cafetería TecNM Campus Región Carbonífera
      </h1>
    </header>
  );
};

export default Header;
