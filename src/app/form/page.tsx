"use client";
import { useState } from "react";
import { createAssistance } from "@/services/assistanceService";
import Input from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import CepInput from "@/components/CepInput"; // <-- Importa o novo componente
import Button from "@/components/Button";
import AddressForm from "@/components/AddressForm";
import ChildForm from "@/components/ChildForm";
import { toast } from "react-toastify";

export default function AssistanceForm() {
  const [children, setChildren] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    responsibleName: "",
    responsiblePhone: "",
    motherName: "",
    motherMobile: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    complement: ""
  });

  const addChild = () => setChildren([...children, { id: children.length, name: "", vaccinationCard: false, additionalInfo: "" }]);
  const removeChild = (index: number) => setChildren(children.filter((_, i) => i !== index));

  const handleChangeChild = (index: number, field: string, value: any) => {
    setChildren(children.map((child, i) => (i === index ? { ...child, [field]: value } : child)));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddressFetched = (address: any) => {
    // Atualiza os campos de endereço com os dados retornados pela API
    setFormData((prevData) => ({
      ...prevData,
      street: address.logradouro,
      neighborhood: address.bairro,
      city: address.localidade,
      state: address.uf,
    }));
  };

  const clearForm = () => {
    setFormData({
      responsibleName: "",
      responsiblePhone: "",
      motherName: "",
      motherMobile: "",
      cep: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      complement: ""
    });
    setChildren([]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { ...formData, children };
    console.log("Enviando dados:", data);

    try {
      await createAssistance(data);
      toast.success("Cadastro realizado com sucesso!");
      clearForm(); // Limpa o formulário após o envio bem-sucedido
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Cadastro de Assistidos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="responsibleName" label="Nome do Responsável" value={formData.responsibleName} onChange={handleChange} required />
        <PhoneInput name="responsiblePhone" label="Telefone do Responsável" value={formData.responsiblePhone} onChange={handleChange} required />
        <Input name="motherName" label="Nome da Mãe" value={formData.motherName} onChange={handleChange} required />
        <PhoneInput name="motherMobile" label="Celular da Mãe" value={formData.motherMobile} onChange={handleChange} />

        {/* Campo de CEP com busca automática de endereço */}
        <CepInput
          name="cep"
          label="CEP"
          value={formData.cep}
          onChange={handleChange}
          onAddressFetched={handleAddressFetched}
          required
        />

        {/* Campos de endereço preenchidos automaticamente */}
        <Input name="street" label="Rua" value={formData.street} onChange={handleChange} required />
        <Input name="number" label="Número" value={formData.number} onChange={handleChange}  required />
        <Input name="neighborhood" label="Bairro" value={formData.neighborhood} onChange={handleChange} required />
        <Input name="city" label="Cidade" value={formData.city} onChange={handleChange} required />
        <Input name="state" label="Estado" value={formData.state} onChange={handleChange} required />
        <Input name="complement" label="Complemento" value={formData.complement} onChange={handleChange}  />

        {/* <AddressForm /> */}

        {children.map((child, index) => (
          <ChildForm key={index} child={child} index={index} handleChangeChild={handleChangeChild} removeChild={removeChild} />
        ))}

        <Button text="Adicionar Filho(a)" onClick={addChild} />
        <Button text="Salvar" type="submit" color="green" />
      </form>
    </div>
  );
}