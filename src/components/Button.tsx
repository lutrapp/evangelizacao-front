import { FaTrash } from 'react-icons/fa'; // Importe o ícone

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "green" | "red";
  className?: string;
  icon?: React.ReactNode; // Propriedade opcional para ícones
}

const colors = {
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
  red: "bg-red-500 hover:bg-red-600",
};

export default function Button({
  text,
  onClick,
  type = "button",
  color = "blue",
  className = "",
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colors[color]} text-white py-2 mx-4 px-4 rounded transition-all ${className} flex items-center`} // Adicionando flex e alinhamento
    >
      {icon && <span className="mr-2">{icon}</span>} {/* Adicionando margem à direita do ícone */}
      {text}
    </button>
  );
}
