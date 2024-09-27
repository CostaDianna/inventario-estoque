
import React from 'react';
import '../styles/globals.css'; 

export default function Fornecedores() {
  return (
    <div className="container">
      <h1>Cadastrar Fornecedor</h1>
      <form className="form-fornecedor">
        <div className="form-group">
          <label htmlFor="nome">Nome do Fornecedor:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome do fornecedor" />
        </div>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" name="cnpj" placeholder="Digite o CNPJ" />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço" />
        </div>
        <div className="form-group">
          <label htmlFor="contato">Contato:</label>
          <input type="text" id="contato" name="contato" placeholder="Digite o contato" />
        </div>
        <button type="submit">Cadastrar Fornecedor</button>
      </form>
    </div>
  );
}
