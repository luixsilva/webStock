import api from "./api";

export class AutenticateService {
  async register(data) {
    try {
      const response = await api.post("/users", data);

      // Verifique o que está na resposta para ajustar conforme necessário
      if (response.data) {
        const token = response.data.token; // Ajuste conforme a estrutura real da resposta
        localStorage.setItem("token", token);
        return response.data; // Retorna a resposta completa para o front-end
      } else {
        throw new Error("Resposta da API não contém dados.");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      throw error;
    }
  }
}

export const autenticateService = new AutenticateService();
