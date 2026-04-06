const api = {
  async buscarPets() {
    try {
      const response = await fetch("http://localhost:5501/pets");
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar dados");
      throw error;
    }
  },
};

export default api;
