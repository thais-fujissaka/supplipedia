import React from 'react';

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

// Função para calcular proteína por porção de 30g
const calcularProteinaPor30g = (proteina?: number, porcao_em_gramas?: number): number | null => {
  if (!proteina || !porcao_em_gramas) return null;
  return (proteina / porcao_em_gramas) * 30;
};

// Função para calcular preço por grama de proteína
const calcularPrecoPorGramaProteina = (
  preco: number,
  proteina?: number,
  peso_liquido_em_gramas?: number,
  porcao_em_gramas?: number
): number | null => {
  if (!proteina || !peso_liquido_em_gramas || !porcao_em_gramas) return null;
  return preco / (proteina * (peso_liquido_em_gramas / porcao_em_gramas));
};

const ProdutoCard: React.FC<ProdutoCardProps> = ({ nome, marca, descricao, imagem_url, preco, atributos }) => {

  const proteinaPor30g = calcularProteinaPor30g(atributos.proteina, atributos.porcao_em_gramas);
  const precoPorGramaProteina = calcularPrecoPorGramaProteina(preco, atributos.proteina, atributos.peso_liquido_em_gramas, atributos.porcao_em_gramas);

  return (
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

        {/* Exibição dos cálculos condicionalmente */}
        {proteinaPor30g && (
          <li>Proteína por porção de 30g: {proteinaPor30g.toFixed(2)}g</li>
        )}
        {precoPorGramaProteina && (
          <li>Preço por grama de proteína: R$ {precoPorGramaProteina.toFixed(2)}</li>
        )}
        {/* Adicione outras condições para diferentes atributos conforme necessário */}
      </ul>
    </div>
  );
};

export default ProdutoCard;