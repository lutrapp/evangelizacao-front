"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/"); // Redireciona para o login se não estiver autenticado
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Bem-vindo ao dashboard! 🎉</p>
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          router.push("/"); // Redireciona para o login após logout
        }}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  );
}
