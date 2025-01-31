"use client";
import { useState } from "react";
import { createAssistance } from "@/services/assistanceService";
import Input from "@/components/Input";
import PhoneInput from "@/components/PhoneInput"; // <-- Importa o novo componente
import Button from "@/components/Button";
import AddressForm from "@/components/AddressForm";
import ChildForm from "@/components/ChildForm";

export default function AssistanceForm() {
  const [children, setChildren] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    responsibleName: "",
    responsiblePhone: "",
    motherName: "",
    motherMobile: "",
  });

  const addChild = () => setChildren([...children, { id: children.length, name: "", vaccinationCard: false, additionalInfo: "" }]);
  const removeChild = (index: number) => setChildren(children.filter((_, i) => i !== index));

  const handleChangeChild = (index: number, field: string, value: any) => {
    setChildren(children.map((child, i) => (i === index ? { ...child, [field]: value } : child)));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { ...formData, children };
    console.log("Enviando dados:", data);

    try {
      await createAssistance(data);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Cadastro de Assistidos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="responsibleName" label="Nome do Responsável" value={formData.responsibleName} onChange={handleChange} required />
        
        {/* Aqui usamos o componente de telefone */}
        <PhoneInput name="responsiblePhone" label="Telefone do Responsável" value={formData.responsiblePhone} onChange={handleChange} required />
        <Input name="motherName" label="Nome da Mãe" value={formData.motherName} onChange={handleChange} required />
        <PhoneInput name="motherMobile" label="Celular da Mãe" value={formData.motherMobile} onChange={handleChange} />

        <AddressForm />

        {children.map((child, index) => (
          <ChildForm key={index} child={child} index={index} handleChangeChild={handleChangeChild} removeChild={removeChild} />
        ))}

        <Button text="Adicionar Filho(a)" onClick={addChild} />
        <Button text="Salvar" type="submit" color="green" />
      </form>
    </div>
  );
}