/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../lib/api";

class UpdateService {
  static async lastModified() {
    try {
      // Retorna objeto con 2 props con categorias, productos que son un datetime
      // que indica cuando se actualizó la última vez, almacenarlos en localStorage
      // Hacer 2 veces al dia hacer el get de las categorias y productos y si es diferente
      // actualizar localStorage y actualizar cache
      const response = await api("/LastUpdatedDates");
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default UpdateService;
