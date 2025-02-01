interface InputProps {
  label: string;
  type?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  size?: "small" | "medium" | "large";  // Nova propriedade para controle de largura
}

export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  required,
  placeholder,
  size = "medium", // Define um tamanho padrão
}: InputProps) {
  let inputSizeClass = "w-full";  // Padrão como full width

  if (size === "small") {
    inputSizeClass = "w-1/3";  // Para campos pequenos, como o número
  } else if (size === "large") {
    inputSizeClass = "w-2/3";  // Para campos maiores
  }

  return (
    <div className="flex flex-col mb-4">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 ${inputSizeClass}`}
      />
    </div>
  );
}
