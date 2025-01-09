import axios from "axios";

const API_BASE_URL = "https://nestjs-pokedex-api.vercel.app";

export const fetchPokemons = async (
  page = 1,
  limit = 50,
  typeId = null,
  name = null
) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemons`, {
      params: { page, limit, typeId, name },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};

export const fetchTypes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/types`);
    return response.data;
  } catch (error) {
    console.error("Error fetching types:", error);
    throw error;
  }
};
