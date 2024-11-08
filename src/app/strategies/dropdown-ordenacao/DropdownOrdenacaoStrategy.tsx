import { CreatinaDropdownStrategy } from "./CreatinaDropdownStrategy";
import { WheyProteinDropdownStrategy } from "./WheyProteinDropdownStrategy";

// Interface de estratégia para renderizar atributos
export interface DropdownOrdenacaoStrategy {
    render(atributos: any, preco: number): JSX.Element;
}
  
export function getDropdownStrategy(categoria: string): DropdownOrdenacaoStrategy {
  switch (categoria.toLowerCase()) {
    case 'whey protein':
      return new WheyProteinDropdownStrategy();
    case 'creatina':
      return new CreatinaDropdownStrategy();
    default:
      return {
        render: () => <p>Sem atributos para ordenação</p>
      };
  }
}