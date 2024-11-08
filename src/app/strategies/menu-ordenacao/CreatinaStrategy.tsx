import { MenuOrdenacaoStrategy } from './MenuOrdenacaoStrategy';

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

export class CreatinaStrategy implements MenuOrdenacaoStrategy {
  render(atributos: { proteina?: number, valor_energetico_porcao?: number, porcao_em_gramas?: number, peso_liquido_em_gramas?: number }, preco: number): JSX.Element {
    const proteinaPor30g = calcularProteinaPor30g(atributos.proteina, atributos.porcao_em_gramas);
    const precoPorGramaProteina = calcularPrecoPorGramaProteina(preco, atributos.proteina, atributos.peso_liquido_em_gramas, atributos.porcao_em_gramas);

    return (
        <div className='flex text-sm justify-stretch divide-x'>
            {atributos.proteina !== undefined && <p className='bg-branco px-3 py-1 rounded'>Proteína: <br/>{atributos.proteina}g</p>}
            {atributos.valor_energetico_porcao !== undefined && <p className='bg-branco px-3 py-1 rounded'>Valor Energético: <br/>{atributos.valor_energetico_porcao} kcal</p>}
            {proteinaPor30g && <p className='bg-branco px-3 py-1 rounded'>Proteína/30g: <br/>{proteinaPor30g.toFixed(2)}g</p>}
            {precoPorGramaProteina && <p className='bg-branco px-3 py-1 rounded'>Preço/g proteína: <br/>R$ {precoPorGramaProteina.toFixed(2)}</p>}
        </div>
      
    
      
    );
  }
}
