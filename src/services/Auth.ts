/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../lib/api";

class AuthService {
  static async login(username: string, password: string) {
    try {
      const respone = await api.post("/authentication", {
        username,
        password,
      });

      return respone.data;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      throw new Error("Credenciales incorrectas");
    }
  }
}

export default AuthService;
