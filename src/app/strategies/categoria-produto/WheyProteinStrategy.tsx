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
        <div className='grid grid-flow-row text-sm justify-stretch divide-x'>
            {atributos.proteina !== undefined && 
              <span className='flex justify-between bg-branco px-3 py-1 '>
                <p>Proteína:</p>
                <p>{atributos.proteina}g</p>
              </span>
            }
            {atributos.valor_energetico_porcao !== undefined && 
              <span className='flex justify-between bg-cinzaClaro px-3 py-1'>
                <p>Valor Energético: </p>
                <p>{atributos.valor_energetico_porcao} kcal</p>
              </span>
            }
            {atributos.proteinaPor30g !== undefined && 
              <span className='flex justify-between bg-branco px-3 py-1'>
                <p>Proteína/30g: </p>
                <p>{atributos.proteinaPor30g.toFixed(2)}g</p>
              </span>
            }
            {atributos.precoPorGramaProteina !== undefined &&
              <span className='flex justify-between bg-cinzaClaro px-3 py-1'>
                <p>Preço/g proteína: </p>
                <p>R$ {atributos.precoPorGramaProteina.toFixed(2)}</p>
              </span>
            }
        </div>
    );
  }
}
