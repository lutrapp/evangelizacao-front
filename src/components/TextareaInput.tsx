interface TextareaInput {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  size?: "small" | "medium" | "large"; // Controle de largura
}

export default function Textarea({
  label,
  name,
  value,
  onChange,
  required,
  placeholder,
  rows = 3, // Define um número padrão de linhas
  size = "medium", // Define um tamanho padrão
}: TextareaInput) {
  let textareaSizeClass = "w-full"; // Padrão como full width

  if (size === "small") {
    textareaSizeClass = "w-1/3"; // Para áreas menores
  } else if (size === "large") {
    textareaSizeClass = "w-2/3"; // Para áreas maiores
  }

  return (
    <div className="flex flex-col mb-4">
      <label className="text-gray-700 font-medium">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 ${textareaSizeClass}`}
      />
    </div>
  );
}
