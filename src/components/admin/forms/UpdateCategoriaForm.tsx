import { FC, useEffect, useState } from "react";
import { ICategoria } from "../../../types";
import { useForm } from "react-hook-form";
import useCategoriasMutation from "../../../hooks/categorias/useCategoriasMutation";
import convertToBase64 from "../../../utils/convertToBase64";

interface Props {
  categoria: ICategoria;
}

interface FormValues {
  id: string | number;
  nombre: string;
  imagenBase64: File[];
}

const UpdateCategoriaForm: FC<Props> = ({ categoria }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: categoria?.id,
      nombre: categoria?.nombre,
    },
  });

  const { updateMutation } = useCategoriasMutation();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Verificamos si hay un archivo seleccionado
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Guardamos la URL de la imagen
    }
  };

  const onSubmit = async (data: FormValues) => {
    const file = data.imagenBase64[0];
    const image = await convertToBase64(file);
    const dto = {
      ...data,
      imagenBase64: image,
    };
    updateMutation.mutate(dto);
  };

  useEffect(() => {
    setImagePreview(
      `https://pwabrd.labsystec.net/categorias/${categoria?.id}.webp`
    );
  }, [categoria?.id]);

  return (
    <div className="mx-4 my-10 max-w-xl md:mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col rounded-lg"
      >
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
            <p className="text-red-500">Este campo es requerido</p>
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
          {...register("imagenBase64", { required: false })}
          onChange={handleImageChange}
        />
        {errors.imagenBase64 && (
          <p className="text-red-500 mt-2">Este campo es requerido</p>
        )}
        <div className="flex justify-center  mt-10">
          <button className="btn mr-2">Guardar</button>
          <button className="btn bg-gray-500">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategoriaForm;
