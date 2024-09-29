import { SubmitHandler, useForm } from "react-hook-form";
import useCategorias from "../../../hooks/categorias/useCategorias";
import useProductosMutation from "../../../hooks/productos/useProductosMutation";
import { useEffect } from "react";

interface FormValues {
  nombre: string;
  precio: number;
  IdCategoria: number;
  disponible: boolean;
}

const CreateProductoForm = () => {
  const categorias = useCategorias();
  const { createMutation } = useProductosMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      nombre: "",
      disponible: true,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    createMutation.mutate(data);
  };

  useEffect(() => {
    if (createMutation.isSuccess) reset();
  }, [createMutation.isSuccess, reset]);

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
        <button
          className={`btn w-full ${createMutation.isLoading && "opacity-90"}`}
          disabled={createMutation.isLoading}
        >
          {createMutation.isLoading ? "Enviando..." : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default CreateProductoForm;
