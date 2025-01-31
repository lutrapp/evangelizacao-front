import Input from "./Input";
import Button from "./Button";

export default function ChildForm({ child, index, handleChangeChild, removeChild }) {
  return (
    <div className="p-4 border rounded mt-4">
      <h4 className="text-lg font-semibold mb-2">Filho(a) {index + 1}</h4>
      <Input
        name="name"
        label="Nome"
        value={child.name}
        onChange={(e) => handleChangeChild(index, "name", e.target.value)}
        required
      />
      <div className="flex items-center gap-2">
        <label className="text-gray-700 font-medium">Apresentou Carteira de Vacinação:</label>
        <input
          type="checkbox"
          name={`vaccinationCard-${index}`} //nome unico p cada crianca
          checked={child.vaccinationCard}
          onChange={(e) => handleChangeChild(index, "vaccinationCard", e.target.checked)}
          className="w-5 h-5"
        />
      </div>
      <div className="mt-2">
        <label className="text-gray-700 font-medium">Informação Adicional:</label>
        <textarea
          value={child.additionalInfo}
          onChange={(e) => handleChangeChild(index, "additionalInfo", e.target.value)}
          className="border p-2 rounded w-full"
          rows={3}
        />
      </div>
      <Button text={`Remover Filho(a) ${index + 1}`} onClick={() => removeChild(index)} color="red" />
    </div>
  );
}
