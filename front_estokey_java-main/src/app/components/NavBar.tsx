"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBox, FaPlusCircle } from "react-icons/fa";

export default function NavBar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `flex items-center transition-all text-sm font-medium px-2 py-1 rounded-md ${
      pathname === href ? "text-emerald-600 font-semibold" : "text-gray-600 hover:text-emerald-600"
    }`;

  return (
    <nav className="bg-white p-4 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-gray-800 text-2xl font-bold tracking-wide hover:text-emerald-600 transition-all">
          <FaHome className="mr-2" /> EstoKey
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className={linkClass("/")}> <FaBox className="mr-2" /> Produtos </Link>
          <a href="#add-product" className="flex items-center text-gray-600 hover:text-emerald-600 transition-all text-sm font-medium px-2 py-1 rounded-md">
            <FaPlusCircle className="mr-2" /> Adicionar Produto
          </a>
          <Link href="/estoque" className={linkClass("/estoque")}> <FaBox className="mr-2" /> Estoque </Link>
        </div>
      </div>
    </nav>
  );
}