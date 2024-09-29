/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../lib/api";
import { ICategoria } from "../types";

class CategoriaService {
  static async get(): Promise<ICategoria[]> {
    try {
      const response = await api.get("/categorias");
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async create(data: any) {
    try {
      const response = await api.post("/categorias", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async update(data: any) {
    try {
      const response = await api.put(`/categorias/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async delete(id: string | number) {
    try {
      const response = await api.delete(`/categorias/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default CategoriaService;
