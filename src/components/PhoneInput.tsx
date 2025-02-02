"use client";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";

interface PhoneInputProps {
  name: string;
  label: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onError?: (message: string) => void; // Callback para lidar com erro
}

const PhoneInput: React.FC<PhoneInputProps> = ({ name, label, value, onChange, required, onError }) => {
  const [phoneValid, setPhoneValid] = useState(true);

  const handleAccept = (value: string) => {
    // Atualiza o valor do telefone
    onChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);
    
    // Validação do telefone (11 dígitos)
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phonePattern.test(value)) {
      setPhoneValid(false);
      if (onError) {
        onError("Telefone inválido. Verifique o formato.");
      }
    } else {
      setPhoneValid(true);
      if (onError) {
        onError(""); // Limpar a mensagem de erro
      }
    }
  };

  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <IMaskInput
        mask="(00) 00000-0000" // Máscara para telefone brasileiro
        value={value}
        onAccept={handleAccept} // Função chamada quando o valor é aceito
        name={name}
        placeholder="(XX) 9XXXX-XXXX"
        className={`border p-2 rounded-md w-full ${!phoneValid ? 'border-red-500' : ''}`} // Adiciona a borda vermelha se inválido
        required={required}
      />
      {!phoneValid && <span className="text-red-500 text-sm">Telefone inválido. Verifique o formato.</span>} {/* Mensagem de erro */}
    </div>
  );
};

export default PhoneInput;
