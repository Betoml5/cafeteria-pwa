const CreateCategoriaForm = () => {
  return (
    <div className="mx-4 my-10 max-w-xl md:mx-auto">
      <form className="flex flex-col bg-secondary-color border border-gray-500/50 p-4 rounded-lg">
        <div className="form-group">
          {" "}
          <label className="label" htmlFor="name">
            Nombre de la categoría
          </label>
          <input
            className="input"
            type="text"
            placeholder="Nombre de la categoría"
          />
        </div>
        {/* <img src="/icon.png" alt="Agregar categoría" className="mt-4" /> */}

        <input
          className="my-4"
          type="file"
          src="/add.png"
          alt="Agregar categoría"
        />
        <div className="flex justify-center  mt-10">
          <button className="btn mr-2">Agregar</button>
          <button className="btn bg-gray-500">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategoriaForm;
