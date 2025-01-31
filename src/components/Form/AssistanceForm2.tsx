// "use client";

// import { useState } from "react";

// type Child = {
//   id: number;
//   name: string;
//   vaccinationCard: boolean;
//   additionalInfo: string;
// };

// export default function AssistanceForm() {
//   const [children, setChildren] = useState<Child[]>([]);

//   const addChild = () => {
//     setChildren((prev) => [
//       ...prev,
//       { id: prev.length, name: "", vaccinationCard: false, additionalInfo: "" },
//     ]);
//   };

//   const removeChild = (index: number) => {
//     setChildren((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleChangeChild = (index: number, field: keyof Child, value: any) => {
//     setChildren((prev) =>
//       prev.map((child, i) =>
//         i === index ? { ...child, [field]: value } : child
//       )
//     );
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.target as HTMLFormElement);
//     const data = {
//       responsibleName: formData.get("responsibleName") as string,
//       responsiblePhone: formData.get("responsiblePhone") as string,
//       motherName: formData.get("motherName") as string,
//       motherMobile: formData.get("motherMobile") as string,
//       address: {
//         street: formData.get("street") as string,
//         zip: formData.get("zip") as string,
//         number: formData.get("number") as string,
//         neighborhood: formData.get("neighborhood") as string,
//         complement: formData.get("complement") as string,
//       },
//       children,
//     };

//     console.log("Form Data:", data);
//     // Envie `data` para o backend
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Cadastro de Assistidos</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Responsável */}
//         {/* Demais campos... */}

//         {/* Lista de Filhos */}
//         {children.map((child, index) => (
//           <div key={child.id} className="child-form p-4 border rounded mt-4">
//             <h4 className="text-lg font-semibold mb-2">Filho(a) {index + 1}</h4>
//             <label className="block mb-2">
//               Nome:
//               <input
//                 type="text"
//                 value={child.name}
//                 onChange={(e) => handleChangeChild(index, "name", e.target.value)}
//                 className="border p-2 rounded w-full"
//                 required
//               />
//             </label>
//             {/* Checkbox e textarea */}
//             <button
//               type="button"
//               onClick={() => removeChild(index)}
//               className="bg-red-500 text-white py-1 px-3 rounded mt-2 hover:bg-red-600"
//             >
//               Remover Filho(a) {index + 1}
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addChild}
//           className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
//         >
//           Adicionar Filho(a)
//         </button>
//         <button
//           type="submit"
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//         >
//           Salvar
//         </button>
//       </form>
//     </div>
//   );
// }
