import React, { useState } from 'react';
import '../styles/globals.css';

export default function Produtos() {

  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    codigoBarras: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
            Nome do Produto:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite o nome do produto"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="descricao" className="block text-gray-700 font-medium mb-2">
            Descrição:
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            placeholder="Digite a descrição do produto"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="preco" className="block text-gray-700 font-medium mb-2">
            Preço:
          </label>
          <input
            type="number"
            id="preco"
            name="preco"
            placeholder="Digite o preço do produto"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.preco}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="codigoBarras" className="block text-gray-700 font-medium mb-2">
            Código de Barras:
          </label>
          <input
            type="text"
            id="codigoBarras"
            name="codigoBarras"
            placeholder="Digite o código de barras"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.codigoBarras}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}
