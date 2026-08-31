import axios from "axios";

export const viaCepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

export async function buscarCep(cep) {
  const { data } = await viaCepApi.get(`/${cep}/json/`);
  return data;
}