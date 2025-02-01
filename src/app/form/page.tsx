"use client";
import { useState } from "react";
import { createAssistance } from "@/services/assistanceService";
import Input from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import CepInput from "@/components/CepInput";
import Button from "@/components/Button";
import ChildForm from "@/components/ChildForm";
import { toast } from "react-toastify";
import { FaCheck, FaPlus } from "react-icons/fa";

export default function AssistanceForm() {
  const [children, setChildren] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    responsibleName: "",
    responsiblePhone: "",
    motherName: "",
    motherMobile: "",
    address: {
      zip: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      complement: "",
    },
  });

  const addChild = () =>
    setChildren([...children, { id: children.length, name: "", vaccinationDeclaration: false, additionalInfo: "" }]);

  const removeChild = (index: number) => setChildren(children.filter((_, i) => i !== index));

  const handleChangeChild = (index: number, field: string, value: any) => {
    setChildren(children.map((child, i) => (i === index ? { ...child, [field]: value } : child)));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (["zip", "street", "number", "neighborhood", "city", "state", "complement"].includes(name)) {
      // Atualiza apenas os campos do endereço
      setFormData((prevData) => ({
        ...prevData,
        address: { ...prevData.address, [name]: value },
      }));
    } else {
      // Atualiza outros campos do formulário
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddressFetched = (address: any) => {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        street: address.logradouro,
        neighborhood: address.bairro,
        city: address.localidade,
        state: address.uf,
      },
    }));
  };

  const clearForm = () => {
    setFormData({
      responsibleName: "",
      responsiblePhone: "",
      motherName: "",
      motherMobile: "",
      address: {
        zip: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        complement: "",
      },
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
      clearForm();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Cadastro de Evangelizandos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="responsibleName" label="Nome do Responsável" value={formData.responsibleName} onChange={handleChange} required />
        <PhoneInput name="responsiblePhone" label="Telefone do Responsável" value={formData.responsiblePhone} onChange={handleChange} required />
        <Input name="motherName" label="Nome da Mãe" value={formData.motherName} onChange={handleChange} required />
        <PhoneInput name="motherMobile" label="Celular da Mãe" value={formData.motherMobile} onChange={handleChange} />

        {/* CEP Input */}
        <CepInput
          name="zip"
          label="CEP"
          value={formData.address.zip}
          onChange={handleChange}
          onAddressFetched={handleAddressFetched}
          required
        />

        {/* Campos de endereço preenchidos automaticamente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input name="street" label="Rua" value={formData.address.street} onChange={handleChange} required size="medium"/>
        <Input name="number" label="Número" value={formData.address.number} onChange={handleChange} required size="medium" />
        <Input name="complement" label="Complemento" value={formData.address.complement} onChange={handleChange} size="medium"/>
        <Input name="neighborhood" label="Bairro" value={formData.address.neighborhood} onChange={handleChange} required />
        <Input name="city" label="Cidade" value={formData.address.city} onChange={handleChange} />
        <Input name="state" label="Estado" value={formData.address.state} onChange={handleChange} size="small" />
        </div>
        {/* Formulário de filhos */}
        {children.map((child, index) => (
          <ChildForm key={index} child={child} index={index} handleChangeChild={handleChangeChild} removeChild={removeChild} />
        ))}

        <Button icon={<FaPlus />} text= "Adicionar filho(a)" onClick={addChild} />
        <Button icon={<FaCheck />} text="Já acrescentei todos os filhos - SALVAR ESSE FORMULÁRIO " type="submit" color="green" />
      </form>
    </div>
  );
}
