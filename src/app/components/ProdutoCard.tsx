import React from 'react';
import { ProdutoBase, WheyProtein, Creatina } from '../../types/produto'; // Importando as interfaces nomeadas

interface ProdutoCardProps {
  nome: string;
  marca: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem_url: string;
  url: string;
  atributos: {
    proteina?: number; // Para Whey Protein
    valor_energetico_porcao?: number; // Para Whey Protein
    porcao_em_gramas?: number; // Para Whey Protein
    peso_liquido_em_gramas?: number; // Para Whey Protein e Creatina
    forma?: string; // Para Creatina
    // Outros atributos específicos para outras categorias
  };
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ nome, marca, descricao, imagem_url, atributos }) => (
  <div className="border p-4 rounded">
    <img src={imagem_url} alt={nome} className="w-full h-48 object-cover" />
    <h2 className="text-xl font-bold mt-2">{nome}</h2>
    <p>{marca}</p>
    <p>{descricao}</p>

    {/* Exibição Condicional dos Atributos */}
    <ul>
      {atributos.proteina !== undefined && <li>Proteína: {atributos.proteina}g</li>}
      {atributos.valor_energetico_porcao !== undefined && <li>Valor Energético: {atributos.valor_energetico_porcao} kcal</li>}
      {atributos.forma && <li>Forma: {atributos.forma}</li>}
      {/* Adicione outras condições para diferentes atributos conforme necessário */}
    </ul>
  </div>
);

export default ProdutoCard;