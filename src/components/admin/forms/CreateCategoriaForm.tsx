/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import useCategoriasMutation from "../../../hooks/categorias/useCategoriasMutation";
import convertToBase64 from "../../../utils/convertToBase64";
interface FormValues {
  nombre: string;
  imagenBase64: File[];
}

const CreateCategoriaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { createMutation } = useCategoriasMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      const file = data.imagenBase64[0];
      const image = await convertToBase64(file);
      const dto = {
        imagenBase64: image,
        nombre: data.nombre,
      };

      createMutation.mutate(dto);
    } catch (error: any) {
      throw new Error("Error al agregar categoría" + error.message);
    } finally {
      reset();
      setImagePreview(null);
    }
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
          accept="image/jpeg, image/png"
          src="/add.png"
          alt="Agregar categoría"
          {...register("imagenBase64", { required: true })}
          onChange={handleImageChange}
        />
        <div className="flex justify-center  mt-10">
          <button className="btn">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategoriaForm;
