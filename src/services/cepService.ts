// services/cepService.ts
export const fetchAddressByCep = async (cep: string) => {
    try {
      // Remove hífens e espaços do CEP
      const cleanedCep = cep.replace(/\D/g, '');
  
      // Verifica se o CEP tem 8 dígitos
      if (cleanedCep.length !== 8) {
        throw new Error("CEP inválido");
      }
  
      // Faz a requisição à API dos Correios
      const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP");
      }
  
      const data = await response.json();
      if (data.erro) {
        throw new Error("CEP não encontrado");
      }
  
      return data; // Retorna os dados do endereço
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      throw error;
    }
  };