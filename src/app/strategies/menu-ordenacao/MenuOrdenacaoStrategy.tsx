import { CreatinaStrategy } from "./CreatinaStrategy";
import { WheyProteinStrategy } from "./WheyProteinStrategy";

// Interface de estratégia para renderizar atributos
export interface MenuOrdenacaoStrategy {
    render(atributos: any, preco: number): JSX.Element;
}
  
export function getStrategy(categoria: string): MenuOrdenacaoStrategy {
  switch (categoria.toLowerCase()) {
    case 'whey protein':
      return new WheyProteinStrategy();
    case 'creatina':
      return new CreatinaStrategy();
    default:
      return {
        render: () => <p>Sem atributos para ordenação</p>
      };
  }
}