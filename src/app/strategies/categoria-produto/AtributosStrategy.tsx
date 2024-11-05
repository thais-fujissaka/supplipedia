import { WheyProteinStrategy } from './WheyProteinStrategy';
import { CreatinaStrategy } from './CreatinaStrategy'; // Certifique-se de que o caminho esteja correto

// Interface de estratégia para renderizar atributos
export interface AtributosStrategy {
    render(atributos: any, preco: number): JSX.Element;
}
  
export function getStrategy(categoria: string): AtributosStrategy {
  switch (categoria.toLowerCase()) {
    case 'whey protein':
      return new WheyProteinStrategy();
    case 'creatina':
      return new CreatinaStrategy();
    default:
      return {
        render: () => <p>Atributos não disponíveis para esta categoria</p>
      };
  }
}
  