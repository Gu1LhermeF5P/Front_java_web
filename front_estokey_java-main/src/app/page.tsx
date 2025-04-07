"use client";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { FaEdit, FaTrash, FaCartPlus } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Caderno", quantity: 10, price: 15.99 },
    { id: 2, name: "Caneta", quantity: 5, price: 3.5 },
  ]);

  const [newProduct, setNewProduct] = useState<Product>({ id: 0, name: "", quantity: 0, price: 0 });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleSale = (id: number) => {
    setProducts(products.map((p) => (p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p)));
  };

  const handleCreate = () => {
    if (!newProduct.name || newProduct.quantity <= 0 || newProduct.price <= 0) return;
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ id: 0, name: "", quantity: 0, price: 0 });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleUpdate = () => {
    if (!newProduct.name || newProduct.quantity <= 0 || newProduct.price <= 0) return;
    setProducts(products.map((p) => (p.id === editingProduct?.id ? newProduct : p)));
    setEditingProduct(null);
    setNewProduct({ id: 0, name: "", quantity: 0, price: 0 });
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      <NavBar />
      <div className="container mx-auto p-8">
        <section id="add-product" className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">🛒 {editingProduct ? "Editar Produto" : "Adicionar Produto"}</h2>

          <label htmlFor="product-name">Nome do Produto:</label>
          <input
            id="product-name"
            type="text"
            placeholder="Ex: Notebook"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="input"
          />

          <label htmlFor="product-quantity">Quantidade do Produto:</label>
          <input
            id="product-quantity"
            type="number"
            placeholder="Ex: 10"
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: Number(e.target.value) })}
            className="input"
          />

          <label htmlFor="product-price">Valor do Produto (R$):</label>
          <input
            id="product-price"
            type="number"
            placeholder="Ex: 199.99"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            className="input"
          />

          <button
            onClick={editingProduct ? handleUpdate : handleCreate}
            className="btn mt-2"
          >
            {editingProduct ? "Atualizar Produto" : "Adicionar Produto"}
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="card">
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="text-gray-500">📦 Quantidade: {p.quantity}</p>
              <p className="text-gray-600 font-semibold">💰 R${p.price.toFixed(2)}</p>
              <div className="buttons">
                <button onClick={() => handleSale(p.id)} className="btn"><FaCartPlus /> Vender</button>
                <button onClick={() => handleEdit(p)} className="btn-edit"><FaEdit /> Editar</button>
                <button onClick={() => handleDelete(p.id)} className="btn-delete"><FaTrash /> Deletar</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
