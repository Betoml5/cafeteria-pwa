/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import useCategorias from "../../../hooks/categorias/useCategorias";
import useProductosMutation from "../../../hooks/productos/useProductosMutation";
import { FC, useEffect, useState } from "react";
import { IProducto } from "../../../types";
import convertToBase64 from "../../../utils/convertToBase64";
import { toast } from "sonner";

interface FormValues {
  id: number;
  nombre: string;
  precio: number;
  IdCategoria: number;
  disponible: boolean;
  ImagenBase64: File[];
}

interface Props {
  producto: IProducto;
}

const UpdateProductoForm: FC<Props> = ({ producto }) => {
  const categorias = useCategorias();
  const mutation = useProductosMutation();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: producto?.id,
      nombre: producto?.nombre,
      IdCategoria: producto?.idCategoria,
      precio: producto?.precio,
      disponible: producto?.disponible,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      let image;
      const file = data.ImagenBase64[0];
      if (file) image = await convertToBase64(file);
      const dto = {
        ...data,
        ImagenBase64: image,
      };
      console.log(dto);
      mutation.updateMutation.mutate(dto);
    } catch (error: any) {
      console.log(error);
      toast.error("Error al actualizar producto", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Verificamos si hay un archivo seleccionado
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Guardamos la URL de la imagen
    }
  };

  useEffect(() => {
    if (!producto) return;
    setImagePreview(
      `https://pwabrd.labsystec.net/producto/${producto?.id}.webp?lastUpdate=${producto?.lastUpdate}`
    );
  }, [producto]);

  if (producto === null) return null;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="label" htmlFor="nombre">
            Nombre
          </label>
          <input
            {...register("nombre", { required: true })}
            className="input"
            type="text"
            placeholder="Nombre"
          />
          {errors.nombre && (
            <p className="text-red-500">Este campo es requerido</p>
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="precio">
            Precio
          </label>
          <input
            {...register("precio", { required: true })}
            className="input"
            type="number"
            placeholder="Precio"
          />
          {errors.precio && (
            <p className="text-red-500">Este campo es requerido</p>
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="categoria">
            Categoria
          </label>
          <select
            {...register("IdCategoria", { required: true })}
            className="input"
            id="categoria"
            defaultValue=""
          >
            <option value="">Seleccionar</option>
            {categorias.data?.map((item) => (
              <option value={item.id} key={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>
          {errors.IdCategoria && (
            <p className="text-red-500">Este campo es requerido</p>
          )}
        </div>
        <div className="form-group flex-row items-center gap-x-4 my-4">
          <label className="label m-0" htmlFor="disponible">
            Disponible
          </label>
          <input type="checkbox" id="disponible" {...register("disponible")} />
        </div>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Vista previa del icono"
            className="mt-4 w-32 h-32 object-cover my-4"
          />
        )}
        <input
          type="file"
          id="ImagenBase64"
          {...register("ImagenBase64")}
          className="my-4"
          onChange={handleImageChange}
          accept="image/jpeg, image/png"
        />
        {errors.ImagenBase64 && (
          <p className="text-red-500">Este campo es requerido</p>
        )}
        <button className="btn w-full">
          {mutation.updateMutation.isLoading ? "Actualizando..." : "Actualizar"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProductoForm;
