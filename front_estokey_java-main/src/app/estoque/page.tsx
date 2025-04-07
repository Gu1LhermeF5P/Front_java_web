import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function EstoquePage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-md shadow transition">
        <FaArrowLeft /> Voltar para o início
      </Link>

      <h1 className="text-3xl font-bold text-emerald-800 mt-6 mb-4">📦 Produtos em Estoque</h1>
      <p className="text-emerald-700">Visualize aqui todos os produtos que foram adicionados ao sistema.</p>
    </main>
  );
}
