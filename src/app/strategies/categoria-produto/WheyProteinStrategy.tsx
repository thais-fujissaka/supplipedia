import { AtributosStrategy } from './AtributosStrategy';

export class WheyProteinStrategy implements AtributosStrategy {
  render(atributos: {
    proteina?: number,
    valor_energetico_porcao?: number,
    porcao_em_gramas?: number,
    peso_liquido_em_gramas?: number,
    proteinaPor30g?: number;
    precoPorGramaProteina?: number;
  },
    preco: number
  ): JSX.Element {
    return (
        <div className='flex text-sm justify-stretch divide-x'>
            {atributos.proteina !== undefined && <p className='bg-branco px-3 py-1 rounded'>Proteína: <br/>{atributos.proteina}g</p>}
            {atributos.valor_energetico_porcao !== undefined && <p className='bg-branco px-3 py-1 rounded'>Valor Energético: <br/>{atributos.valor_energetico_porcao} kcal</p>}
            {atributos.proteinaPor30g !== undefined && <p className='bg-branco px-3 py-1 rounded'>Proteína/30g: <br/>{atributos.proteinaPor30g.toFixed(2)}g</p>}
            {atributos.precoPorGramaProteina !== undefined && <p className='bg-branco px-3 py-1 rounded'>Preço/g proteína: <br/>R$ {atributos.precoPorGramaProteina.toFixed(2)}</p>}
        </div>
    );
  }
}
