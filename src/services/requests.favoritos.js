import axios from 'axios';

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" })

async function getFavoritos() {
  const response = await favoritosAPI.get('/')

  return response.data;
}

async function postFavoritos(id) {
  try {
    await favoritosAPI.post(`/${id}`);
    return;
  } catch (error) {
    console.error("Erro ao favoritar livro:", error.message);
    return 'isFavorite';
  }
}

async function deleteFavoritos(id) {
  await favoritosAPI.delete(`/${id}`)
}

export {
  getFavoritos,
  postFavoritos,
  deleteFavoritos,
}