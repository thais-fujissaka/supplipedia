export interface ProdutoBase {
  id_produto: number;
  nome: string;
  marca: string;
  preco: number;
  categoria: string;
  descricao: string;
  imagem_url: string;
  url: string;
}

// Interface para Whey Protein
export interface WheyProtein extends ProdutoBase {
  atributos: {
    proteina: number;
    valor_energetico_porcao: number;
    peso_liquido_em_gramas: number;
    porcao_em_gramas: number;
  };
}

// Interface para outro tipo de suplemento (ex: Creatina)
export interface Creatina extends ProdutoBase {
  atributos: {
    forma: string;
    peso_liquido_em_gramas: number;
  };
}