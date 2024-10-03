import api from "../lib/api";
import { IMenuProduct } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
class MenuDiaService {
  static async get(): Promise<IMenuProduct[]> {
    try {
      const response = await api.get("/menu");
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  static async create(data: string[] | number[]) {
    try {
      const response = await api.post("/menu", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default MenuDiaService;
