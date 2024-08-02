import api from "./api";

export class AutenticateService {
  async register(data) {
    try {
      const response = await api.post("/users", data);
      // Supondo que o token seja retornado na resposta após o registro
      const token = response.data.token;
      // Armazene o token no localStorage ou sessionStorage
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      console.error("Erro ao registrar");
      throw error;
    }
  }
}

export const autenticateService = new AutenticateService();
