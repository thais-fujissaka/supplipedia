'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";
import produtosMock from '../../../mock/produtos.json';
import ProdutoCard from "../components/ProdutoCard"

const ResultadosInformacao: React.FC = () => {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria"); // Capturar a categoria da query string

  // Filtrar os produtos pela categoria
  const produtosFiltrados = produtosMock.filter(produto => produto.categoria.toLowerCase() === categoria?.toLowerCase());

  return (
    <section className="container mx-auto mt-12">
      <h1 className="text-2xl font-bold px-4">Resultados da Pesquisa</h1>
      
      {/* Exibindo a categoria pesquisada */}
      <p className="mt-4">Você pesquisou por: <strong>{categoria}</strong></p>
    </section>
  );
};

export default ResultadosInformacao;