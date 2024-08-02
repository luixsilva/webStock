import axios from "axios";

// Criação da instância Axios
const api = axios.create({
  baseURL: "http://localhost:3333", // Substitua pela URL base da sua API
  timeout: 10000, // Tempo limite de 10 segundos
  headers: { "Content-Type": "application/json" },
});

// Interceptor de requisição
api.interceptors.request.use(
  (config) => {
    // Adicionar token de autenticação, se necessário
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de resposta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // O servidor respondeu com um status fora do intervalo 2xx
      console.error("Erro na resposta:", error.response.data);
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      console.error("Erro na requisição:", error.request);
    } else {
      // Algo aconteceu na configuração da requisição que disparou um erro
      console.error("Erro na configuração:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
