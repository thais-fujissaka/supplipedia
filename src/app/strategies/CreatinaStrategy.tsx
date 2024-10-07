import { AtributosStrategy } from './AtributosStrategy';

export class CreatinaStrategy implements AtributosStrategy {
  render(atributos: { forma?: string, peso_liquido_em_gramas?: number }, preco: number): JSX.Element {
    return (
      <div className='flex text-sm justify-stretch divide-x'>
        {atributos.forma && <p className='bg-branco px-3 py-1 rounded'>Forma: <br/>{atributos.forma}</p>}
        {atributos.peso_liquido_em_gramas !== undefined && <p className='bg-branco px-3 py-1 rounded'>Peso Líquido: <br/>{atributos.peso_liquido_em_gramas}g</p>}
      </div>
    );
  }
}
