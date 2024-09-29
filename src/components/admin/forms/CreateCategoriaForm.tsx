import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  nombre: string;
  icono: string;
}

const CreateCategoriaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Verificamos si hay un archivo seleccionado
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Guardamos la URL de la imagen
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {" "}
          <label className="label" htmlFor="name">
            Nombre de la categoría
          </label>
          <input
            className="input"
            type="text"
            placeholder="Nombre de la categoría"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <p className="text-red-500 mt-2">Este campo es requerido</p>
          )}
        </div>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Vista previa del icono"
            className="mt-4 w-32 h-32 object-cover"
          />
        )}

        <input
          className="my-4"
          type="file"
          src="/add.png"
          alt="Agregar categoría"
          {...register("icono", { required: true })}
          onChange={handleImageChange}
        />
        <div className="flex justify-center  mt-10">
          <button className="btn bg-gray-500 mr-2">Cancelar</button>
          <button className="btn">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategoriaForm;
