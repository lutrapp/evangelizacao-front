interface InputProps {
    label: string;
    type?: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
  }
  
  export default function Input({ label, type = "text", name, value, onChange, required, placeholder }: InputProps) {
    return (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  }
  