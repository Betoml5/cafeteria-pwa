import api from "../lib/api";
import { IProducto } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
class ProductoService {
  static async get(): Promise<IProducto[]> {
    try {
      const response = await api.get("/productos");
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async create(data: any) {
    try {
      const response = await api.post("/productos", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async update(data: any) {
    try {
      const response = await api.put(`/productos`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async delete(id: string | number) {
    try {
      const response = await api.delete(`/productos/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async updateIsAvaliable(id: string | number, isAvaliable: any) {
    try {
      const response = await api.get(
        `/productos/disponble?id=${id}&disponible=${isAvaliable}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default ProductoService;
