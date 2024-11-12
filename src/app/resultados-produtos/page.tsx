'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";
import produtos from '../../../mock/produtos.json';
import ProdutoCard from "../components/ProdutoCard"

const getOpcoesOrdenacao = (categoria: string | null) => {
  switch (categoria?.toLowerCase()) {
    case 'creatina':
      return [
        { label: 'Preço', value: 'preco' },
        { label: 'Peso líquido', value: 'peso_liquido'}
      ];
    case 'whey protein':
      return [
        { label: 'Proteína', value: 'proteina' },
        { label: 'Valor Energético', value: 'valor_energetico_porcao' },
        { label: 'Proteína/30g', value: 'proteina_por_30g'},
        { label: 'Preço por grama proteína', value: 'preco_por_grama_proteina'},
        { label: 'Preço', value: 'preco' }
      ];
    default:
      return [{ label: 'Preço', value: 'preco' }]; // Opção padrão
  }
};

// Função para calcular preço por grama de produto
const calcularPrecoPorGrama = (preco?: number, peso_liquido_em_gramas?: number): number | null => {
  if (!preco || !peso_liquido_em_gramas) return null;
  return preco / peso_liquido_em_gramas;
};

const ResultadosProdutos: React.FC = () => {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria"); // Capturar a categoria da query string

  // Obter opções de ordenação com base na categoria
  const opcoesOrdenacao = getOpcoesOrdenacao(categoria);

  // Estado para a opção selecionada
  const [ordenacao, setOrdenacao] = useState(opcoesOrdenacao[0]?.value || 'preco');

  // Função para lidar com a mudança de ordenação
  const handleOrdenacaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdenacao(e.target.value);
  }

  // Pré-calcular os atributos derivados para evitar cálculos redundantes
  const produtosComAtributosCalculados = produtos
    .filter(produto => produto.categoria.toLowerCase() === categoria?.toLowerCase())
    .map(produto => {
      const proteinaPor30g = produto.atributos.proteina && produto.atributos.porcao_em_gramas
        ? (produto.atributos.proteina / produto.atributos.porcao_em_gramas) * 30
        : 0;
    
      const precoPorGramaProteina = produto.atributos.proteina && produto.atributos.peso_liquido_em_gramas && produto.atributos.porcao_em_gramas
        ? produto.preco / (produto.atributos.proteina * (produto.atributos.peso_liquido_em_gramas / produto.atributos.porcao_em_gramas))
        : Infinity;

      const precoPorGrama = calcularPrecoPorGrama(produto.preco, produto.atributos.peso_liquido_em_gramas);

      return {
        ...produto,
        atributos: {
        ...produto.atributos,
        proteinaPor30g,
        precoPorGramaProteina,
        precoPorGrama
      }
        
      };
    });

  // Ordenar os produtos usando os valores pré-calculados
  const produtosFiltradosOrdenados = produtosComAtributosCalculados.sort((a, b) => {
    if (ordenacao === 'preco') {
      return a.preco - b.preco;
    } else if (ordenacao === 'peso_liquido') {
      return (b.atributos.peso_liquido_em_gramas || 0) - (a.atributos.peso_liquido_em_gramas || 0);
    } else if (ordenacao === 'proteina') {
      return (b.atributos.proteina || 0) - (a.atributos.proteina || 0);
    } else if (ordenacao === 'valor_energetico_porcao') {
      return (a.atributos.valor_energetico_porcao || 0) - (b.atributos.valor_energetico_porcao || 0);
    } else if (ordenacao === 'proteina_por_30g') {
      return (b.atributos.proteinaPor30g || 0) - (a.atributos.proteinaPor30g || 0);
    } else if (ordenacao === 'preco_por_grama_proteina') {
      return (a.atributos.precoPorGramaProteina || 0) - (b.atributos.precoPorGramaProteina || 0);
    } else if (ordenacao === 'preco_por_grama')
      return (a.atributos.precoPorGrama || 0) - (b.atributos.precoPorGrama || 0);
    return 0;
  });

  return (
    <section className="container mx-auto mt-12">
      
      {/* Exibindo a categoria pesquisada */}
      <h1 className="mt-4">Você pesquisou por: <strong>{categoria}</strong></h1>

      {/* Seletor de ordenação de atributos */}
      <div className="mt-4">
        <label htmlFor="ordenacao" className="mr-2">Ordenar por:</label>
        <select
          id="ordenacao"
          value={ordenacao}
          onChange={handleOrdenacaoChange}
          className="border rounded p-2"
        >
          {opcoesOrdenacao.map(opcao => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mapeando e exibindo os produtos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {produtosFiltradosOrdenados.length > 0 ? (
          produtosFiltradosOrdenados.map(produto => (
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