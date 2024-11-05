import { WheyProteinStrategy } from './WheyProteinStrategy';
import { CreatinaStrategy } from './CreatinaStrategy';

export interface InformacaoStrategy {
    render(): JSX.Element;
}

export function getStrategy(categoria: string | null): InformacaoStrategy {
    
    if (!categoria) {
        return {
            render: () => <p>Atributos não disponíveis para esta categoria</p>
        };
    }

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