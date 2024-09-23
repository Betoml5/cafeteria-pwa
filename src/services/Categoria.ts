import api from "../lib/api";

class CategoriaService {
  static async get() {
    try {
      const response = await api.get("/categorias");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async create(data: any) {
    try {
      const response = await api.post("/categorias", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async update(id: string, data: any) {
    try {
      const response = await api.put(`/categorias/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(id: string) {
    try {
      const response = await api.delete(`/categorias/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default CategoriaService;
