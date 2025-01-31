// components/CepInput.tsx
"use client";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { fetchAddressByCep } from "@/services/cepService";
import { toast } from "react-toastify";

interface CepInputProps {
  name: string;
  label: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressFetched: (address: any) => void; // Callback para retornar os dados do endereço
  required?: boolean;
}

const CepInput: React.FC<CepInputProps> = ({ name, label, value, onChange, onAddressFetched, required }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAccept = async (value: string) => {
    // Dispara o evento onChange com o valor formatado
    onChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);

    // Verifica se o CEP está completo (8 dígitos)
    if (value.replace(/\D/g, '').length === 8) {
      setIsLoading(true);
      try {
        const address = await fetchAddressByCep(value);
        onAddressFetched(address); // Passa os dados do endereço para o componente pai
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        toast.error("CEP não encontrado ou inválido.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <IMaskInput
        mask="00000-000" // Máscara para CEP
        value={value}
        onAccept={handleAccept} // Função chamada quando o valor é aceito
        name={name}
        placeholder="12345-678"
        className="border p-2 rounded-md w-full"
        required={required}
        disabled={isLoading}
      />
      {isLoading && <span className="text-sm text-gray-500">Buscando endereço...</span>}
    </div>
  );
};

export default CepInput;