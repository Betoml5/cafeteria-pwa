import { SubmitHandler, useForm } from "react-hook-form";
import useCategorias from "../../../hooks/categorias/useCategorias";
import useProductosMutation from "../../../hooks/productos/useProductosMutation";
import { FC, useEffect } from "react";
import { IProducto } from "../../../types";

interface FormValues {
  nombre: string;
  precio: number;
  IdCategoria: number;
  disponible: boolean;
}

interface Props {
  producto: IProducto;
}

const UpdateProductoForm: FC<Props> = ({ producto }) => {
  const categorias = useCategorias();
  const mutation = useProductosMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      nombre: producto?.nombre,
      IdCategoria: producto?.idCategoria,
      precio: producto?.precio,
      disponible: producto?.disponible,
    },
  });

  console.log(producto);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.updateMutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.updateMutation.isSuccess) reset();
  }, [mutation.updateMutation.isSuccess, reset]);

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
          <input
            type="checkbox"
            id="disponible"
            {...register("disponible", { required: true })}
          />
        </div>
        <button className="btn w-full">Crear</button>
      </form>
    </div>
  );
};

export default UpdateProductoForm;
