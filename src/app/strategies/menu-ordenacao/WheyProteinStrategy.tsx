import { MenuOrdenacaoStrategy } from './MenuOrdenacaoStrategy';

export class WheyProteinStrategy implements MenuOrdenacaoStrategy {
  render(atributos: { proteina?: number, valor_energetico_porcao?: number, porcao_em_gramas?: number, peso_liquido_em_gramas?: number }, preco: number): JSX.Element {
    
    return (
        <select onChange={(e) => setAtributo(e.target.value)} value={atributo}>
        <option value="proteina">Proteína</option>
        <option value="valor_energetico_porcao">Valor Energético</option>
        <option value="preco_por_grama_proteina">Preço por Grama de Proteína</option>
        <option value="preco_total">Preço Total</option>
        <option value="proteina_por_30g"></option>
        </select>
    );
  }
}
