interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    color?: "blue" | "green" | "red";
  }
  
  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
  };
  
  export default function Button({ text, onClick, type = "button", color = "blue" }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${colors[color]} text-white py-2 px-4 rounded transition-all`}
      >
        {text}
      </button>
    );
  }
  