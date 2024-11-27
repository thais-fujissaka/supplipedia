import { InformacaoStrategy } from './InformacaoStrategy';

export class WheyProteinStrategy implements InformacaoStrategy {
    render() : JSX.Element {
        return (
            <section className="max-w-3xl mx-12 px-4 py-8 space-y-8 bg-branco border border-preto">
                {/* Título principal */}
                <h2 className="font-extrabold text-4xl text-preto underline decoration-verdeClaro pb-4 text-center border-b border-gray-300">
                    Whey Protein
                </h2>

                {/* Seção: O que é? */}
                <section className="space-y-4">
                    <h3 className="font-bold text-2xl text-gray-800">O que é?</h3>
                    <p className="text-gray-700 leading-relaxed">
                    É um derivado do leite, subproduto resultante da produção de queijo ou iogurte. É considerado particularmente benéfico por aumentar a produção de novas proteínas nos seus músculos.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    O whey protein é muito consumido no meio fitness para auxiliar na ingestão de proteínas, sendo uma fonte de proteína rápida e prática para o consumo.
                    </p>
                </section>

                {/* Seção: Como escolher? */}
                <section className="space-y-4">
                    <h3 className="font-bold text-2xl text-gray-800">Como escolher?</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Existem diferentes tipos de whey protein utilizado em suplementos. Duas das formas mais comuns são whey concentrado e isolado.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Essas duas formas possuem técnicas diferentes de produção e diferem nas suas tabelas nutricionais.
                    </p>
                </section>

                {/* Seção: Tipos de Whey Protein */}
                <section className="space-y-6">
                    <h4 className="font-bold text-2xl text-gray-800">Tipos de Whey Protein</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Para saber como incluir o Whey Protein na rotina, após a orientação médica, é preciso entender que existem três diferentes versões do suplemento:
                    </p>
                    <ul className="list-disc ml-8 space-y-2 text-gray-700">
                    <li>
                        <strong>Isolado</strong> — com alto teor proteico e baixos carboidratos e gorduras, é mais indicado para pessoas com intolerância à lactose e que buscam o emagrecimento;
                    </li>
                    <li>
                        <strong>Concentrado</strong> — contém lactose e um teor menor de proteínas, se comparado às outras versões, porém, com valores mais acessíveis;
                    </li>
                    <li>
                        <strong>Hidrolisado</strong> — também tem alto teor de proteínas e poucos carboidratos e gorduras, porém, tem uma absorção ainda mais rápida, o que é benéfico para quem visa alta performance.
                    </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                    Todas essas versões podem ser encontradas em forma de pó, o que facilita o consumo no dia a dia. O Whey Protein pode ser encontrado em sabores, como chocolate, morango e baunilha, e consumido com água ou leite. Outra opção é utilizá-lo em receitas de bolo ou misturado a frutas.
                    </p>
                </section>
            </section>

        )
    }
}