"use client";
import React from "react";
import { IMaskInput } from "react-imask";

interface PhoneInputProps {
  name: string;
  label: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ name, label, value, onChange, required }) => {
  const handleAccept = (value: string) => {
    // Dispara o evento onChange com o valor formatado
    onChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <IMaskInput
        mask="(00) 00000-0000" // Máscara para telefone brasileiro
        value={value}
        onAccept={handleAccept} // Função chamada quando o valor é aceito
        name={name}
        placeholder="(11) 98765-4321"
        className="border p-2 rounded-md w-full"
        required={required}
      />
    </div>
  );
};

export default PhoneInput;