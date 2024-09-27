
import React from 'react';
import '../styles/globals.css';

export default function Associacao() {
  return (
    <div className="container">
      <h1>Associar Produto a Fornecedor</h1>
      <form className="form-associacao">
        <div className="form-group">
          <label htmlFor="produto">Produto:</label>
          <select id="produto" name="produto">
            <option value="">Selecione um produto</option>
            <option value="1">Produto 1</option>
            <option value="2">Produto 2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fornecedor">Fornecedor:</label>
          <select id="fornecedor" name="fornecedor">
            <option value="">Selecione um fornecedor</option>
            <option value="1">Fornecedor 1</option>
            <option value="2">Fornecedor 2</option>
          </select>
        </div>
        <button type="submit">Associar</button>
      </form>
    </div>
  );
}
