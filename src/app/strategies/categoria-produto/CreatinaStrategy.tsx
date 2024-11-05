import { AtributosStrategy } from './AtributosStrategy';

// Função para calcular preço por grama de produto
const calcularPrecoPorGrama = (preco?: number, peso_liquido_em_gramas?: number): number | null => {
  if (!preco || !peso_liquido_em_gramas) return null;
  return preco / peso_liquido_em_gramas;
};

export class CreatinaStrategy implements AtributosStrategy {
  render(atributos: { forma?: string, peso_liquido_em_gramas?: number }, preco: number): JSX.Element {

    const precoPorGrama = calcularPrecoPorGrama(preco, atributos.peso_liquido_em_gramas);

    return (
      <div className='flex text-sm justify-stretch divide-x'>
        {atributos.forma && <p className='bg-branco px-3 py-1 rounded'>Forma: <br/>{atributos.forma}</p>}
        {atributos.peso_liquido_em_gramas !== undefined && <p className='bg-branco px-3 py-1 rounded'>Peso Líquido: <br/>{atributos.peso_liquido_em_gramas}g</p>}
        {preco && atributos.peso_liquido_em_gramas && <p className='bg-branco px-3 py-1 rounded'>Preço/g: <br/>{precoPorGrama?.toFixed(2)}</p>}
      </div>
    );
  }
}
