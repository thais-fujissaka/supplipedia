'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";
import produtos from '../../../mock/produtos.json';
import ProdutoCard from "../components/ProdutoCard"

const ResultadosProdutos: React.FC = () => {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria"); // Capturar a categoria da query string

  // Filtrar os produtos pela categoria
  const produtosFiltrados = produtos.filter(produto => produto.categoria.toLowerCase() === categoria?.toLowerCase());

  const produtosOrdenados = [...produtos].sort((a,b) => {
    const strategyA
  });

  return (
    <section className="container mx-auto mt-12">
      
      {/* Exibindo a categoria pesquisada */}
      <h1 className="mt-4">Você pesquisou por: <strong>{categoria}</strong></h1>

      {/* Seletor de ordenação de atributos */}


      {/* Mapeando e exibindo os produtos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map(produto => (
            <ProdutoCard
              key={produto.id_produto}
              nome={produto.nome}
              marca={produto.marca}
              categoria={produto.categoria}
              preco={produto.preco}
              descricao={produto.descricao}
              imagem_url={produto.imagem_url}
              url={produto.url}
              atributos={produto.atributos}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado para a categoria {categoria}.</p>
        )}
      </div>
    </section>
  );
};

export default ResultadosProdutos;