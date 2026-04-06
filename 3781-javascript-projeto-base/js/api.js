const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:5501/pensamentos");
      return await response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  async salvarPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:5501/pensamentos", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
};

export default api;
