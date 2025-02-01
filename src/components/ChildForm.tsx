import Input from "./Input";
import Button from "./Button";
import { useState, useEffect } from "react";
import TextareaInput from "./TextareaInput";
import { FaTrash } from "react-icons/fa";

export default function ChildForm({ child, index, handleChangeChild, removeChild }) {
  const [showDisease, setShowDisease] = useState(!!child.disease);
  const [showMedication, setShowMedication] = useState(!!child.medication);
  const [showAllergy, setShowAllergy] = useState(!!child.allergies);
  const [showPhysicalDisability, setShowPhysicalDisability] = useState(!!child.physicalDisability);
  const [showLearningDifficulty, setShowLearningDifficulty] = useState(!!child.learningDifficulty);

  useEffect(() => {
    setShowDisease(!!child.disease);
    setShowMedication(!!child.medication);
    setShowAllergy(!!child.allergies);
    setShowPhysicalDisability(!!child.physicalDisability);
    setShowLearningDifficulty(!!child.learningDifficulty);
  }, [child]);

  return (
    <div className="p-4 border rounded mt-4 bg-gray-50">
      <h4 className="text-lg font-semibold mb-4">Filho(a) {index + 1}</h4>

      <Input name="name" label="Nome" value={child.name} onChange={(e) => handleChangeChild(index, "name", e.target.value)} required />
      <Input name="dob" label="Data de Nascimento" type="date" value={child.dob} onChange={(e) => handleChangeChild(index, "dob", e.target.value)} required />

      {/* Alergias */}
      <div className="flex flex-col gap-4 mt-4 mb-4">
        <label className="text-gray-700 font-medium">Possui alguma alergia?</label>
        <div className="flex gap-4">
          <button type="button" className={`px-4 py-2 rounded ${showAllergy ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setShowAllergy(true)}>Sim</button>
          <button type="button" className={`px-4 py-2 rounded ${!showAllergy ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => { setShowAllergy(false); handleChangeChild(index, "allergies", ""); }}>Não</button>
        </div>
        {showAllergy && <Input name="allergies" label="Quais?" value={child.allergies} onChange={(e) => handleChangeChild(index, "allergies", e.target.value)} />}
      </div>
      {/* Deficiência Física */}
      <div className="flex flex-col gap-4 mt-4">
        <label className="text-gray-700 font-medium">Possui alguma deficiência física?</label>
        <div className="flex gap-4">
          <button type="button" className={`px-4 py-2 rounded ${showPhysicalDisability ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setShowPhysicalDisability(true)}>Sim</button>
          <button type="button" className={`px-4 py-2 rounded ${!showPhysicalDisability ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => { setShowPhysicalDisability(false); handleChangeChild(index, "physicalDisability", ""); }}>Não</button>
        </div>
        {showPhysicalDisability && <Input name="physicalDisability" label="Qual?" value={child.physicalDisability} onChange={(e) => handleChangeChild(index, "physicalDisability", e.target.value)} />}
      </div>


      {/* Doenças ou Diagnóstico (TDAH, Autismo, etc.) */}
      <div className="flex flex-col gap-4 mt-4">
        <label className="text-gray-700 font-medium">Tem alguma doença ou diagnóstico como TDAH, autismo, etc.?</label>
        <div className="flex gap-4">
          <button type="button" className={`px-4 py-2 rounded ${showDisease ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setShowDisease(true)}>Sim</button>
          <button type="button" className={`px-4 py-2 rounded ${!showDisease ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => { setShowDisease(false); handleChangeChild(index, "disease", ""); }}>Não</button>
        </div>
        {showDisease && <Input name="disease" label="Quais?" value={child.disease} onChange={(e) => handleChangeChild(index, "disease", e.target.value)} />}
      </div>
    
      {/* Dificuldade de Aprendizado */}
      <div className="flex flex-col gap-4 mt-4">
        <label className="text-gray-700 font-medium">Possui alguma dificuldade de aprendizado?</label>
        <div className="flex gap-4">
          <button type="button" className={`px-4 py-2 rounded ${showLearningDifficulty ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setShowLearningDifficulty(true)}>Sim</button>
          <button type="button" className={`px-4 py-2 rounded ${!showLearningDifficulty ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => { setShowLearningDifficulty(false); handleChangeChild(index, "learningDifficulty", ""); }}>Não</button>
        </div>
        {showLearningDifficulty && <Input name="learningDifficulty" label="Quais?" value={child.learningDifficulty} onChange={(e) => handleChangeChild(index, "learningDifficulty", e.target.value)} />}
      </div>

      {/* Medicamentos */}
      <div className="flex flex-col gap-4 mt-4 mb-4">
        <label className="text-gray-700 font-medium">Toma algum medicamento?</label>
        <div className="flex gap-4">
          <button type="button" className={`px-4 py-2 rounded ${showMedication ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setShowMedication(true)}>Sim</button>
          <button type="button" className={`px-4 py-2 rounded ${!showMedication ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => { setShowMedication(false); handleChangeChild(index, "medication", ""); }}>Não</button>
        </div>
        {showMedication && <Input name="medication" label="Quais?" value={child.medication} onChange={(e) => handleChangeChild(index, "medication", e.target.value)} />}
      </div>


      {/* Comportamento */}
      <TextareaInput
        label="Como é o comportamento em casa"
        name="homeBehavior"
        value={child.homeBehavior}
        onChange={(e) => handleChangeChild(index, "homeBehavior", e.target.value)}
        rows={3}
        placeholder="Descreva o comportamento em casa..."
        />

      <TextareaInput
        label="Comportamento na escola"
        name="schoolBehavior"
        value={child.schoolBehavior}
        onChange={(e) => handleChangeChild(index, "schoolBehavior", e.target.value)}
        rows={3}
        placeholder="Descreva o comportamento na escola..."
        />

      <div className="flex items-center gap-4 mt-4">
        <label className="text-gray-700 font-medium">É alfabetizado?</label>
        <input type="checkbox" checked={child.literate} onChange={(e) => handleChangeChild(index, "literate", e.target.checked)} className="w-5 h-5" />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <label className="text-gray-700 font-medium">Precisa de apoio escolar?</label>
        <input type="checkbox" checked={child.needsSchoolSupport} onChange={(e) => handleChangeChild(index, "needsSchoolSupport", e.target.checked)} className="w-5 h-5" />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <label className="text-gray-700 font-medium">Apresentou DVA?</label>
        <input type="checkbox" checked={child.vaccinationDeclaration} onChange={(e) => handleChangeChild(index, "vaccinationDeclaration", e.target.checked)} className="w-5 h-5" />
      </div>

      <div className="flex items-center gap-4 mt-4 mb-4">
        <label className="text-gray-700 font-medium">Possui saneamento básico onde mora?</label>
        <input type="checkbox" checked={child.basicSanitation} onChange={(e) => handleChangeChild(index, "basicSanitation", e.target.checked)} className="w-5 h-5" />
      </div>

            {/* info */}

    <div className="flex flex-col gap-2 mt-4">
    <label className="text-gray-700 font-medium" htmlFor={`additionalInfo-${index}`}>
        Informações adicionais
    </label>
    <textarea
        id={`additionalInfo-${index}`}
        name="additionalInfo"
        value={child.additionalInfo}
        onChange={(e) => handleChangeChild(index, "additionalInfo", e.target.value)}
        rows={5}
        className="w-full p-2 border rounded-md"
        placeholder="Digite informações adicionais sobre a criança..."
    />
    </div>

    <div className="flex justify-between items-center mt-6">
        <Button icon={<FaTrash />}  
        text={`\Excluir Filho(a) ${index + 1} `} onClick={() => removeChild(index)} color="red" />
      </div>

      {/* <div className="flex justify-between items-center mt-6">
        <Button icon={<FaTrash />}  
        text={`\Excluir Filho(a) ${index + 1} `} onClick={() => removeChild(index)} color="red" />
      </div> */}
    </div>
  );
}
