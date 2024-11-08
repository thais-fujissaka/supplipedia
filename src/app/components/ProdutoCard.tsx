import React from 'react';
import PrimaryButton from './PrimaryButton';
import { getStrategy } from '../strategies/categoria-produto/AtributosStrategy';

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
    // Atributos calculados:
    proteinaPor30g?: number;
    precoPorGramaProteina?: number;
    // Outros atributos específicos para outras categorias  

  };
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ nome, marca, descricao, imagem_url, url, categoria, preco, atributos }) => {

  const strategy = getStrategy(categoria);

  return (
    <div className="max-w-[384px] bg-branco rounded border border-preto divide-y">
      <img src={imagem_url} alt={nome} className="w-full h-48 object-contain py-2" />

      <div className='px-4'>
        <h3 className="text-md mt-2 truncate font-bold">{nome}</h3>
        <p className='mb-2'>{marca}</p>
        {/*<p>{descricao}</p>*/}
      </div>
      
      
      {/* Renderizar atributos usando a estratégia */}
      {strategy.render(atributos, preco, proteinaPor30g, precoPorGramaProteina)}
      
      {/* Comprar */}
      <div className='flex justify-center'>
        <PrimaryButton title={"Comprar"} onClick={() => window.open(url)} aria-labelledby={"Comprar"}/>
      </div>
      
    </div>
      
  );
};

export default ProdutoCard;