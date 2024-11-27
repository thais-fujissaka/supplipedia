import { InformacaoStrategy } from './InformacaoStrategy';

export class CreatinaStrategy implements InformacaoStrategy {
    render() : JSX.Element {
        return (
            <section className='max-w-3xl mx-auto px-4 py-8 space-y-8 bg-branco border border-preto'>
                <h2 className='font-bold text-3xl text-preto underline decoration-verdeClaro pb-4 text-center border-b border-gray-300'>Creatina</h2>

                <section className='my-4'>
                    <h3 className='font-bold text-2xl'>O que é?</h3>
                    <p>A creatina é uma substância produzida naturalmente pelo organismo, sendo formada por três aminoácidos:</p>
                    <ul className='list-disc ml-8'>
                        <li>glicina;</li>
                        <li>metionina;</li>
                        <li>arginina.</li>
                    </ul>
                    <p>Ela também pode ser consumida na alimentação, especialmente em peixes e carnes. No entanto, existe como um suplemento, sendo encontrada de forma concentrada.</p>
                    <p>O armazenamento dessa substância ocorre, principalmente, nas fibras musculares, e uma parte menor vai para o cérebro.</p>
                </section>
                
                <section className='my-4'>
                    <h3 className='font-bold text-2xl'>Para que serve?</h3>
                    <p>A creatina serve como fonte de produção de energia para as células musculares, de modo que melhora a força e o tônus muscular.</p>
                    <p>Por isso, quem faz atividades físicas frequentes costuma suplementar essa substância. Além disso, ela pode trazer mais qualidade de vida para grupos específicos, como os idosos.</p>
                    <p>No entanto, se você quer tê-la como aliada, é importante ter uma avaliação médica para evitar doses mais altas do que o necessário. Quando isso acontece, há risco de sobrecarga dos rins.</p>
                </section>

                <section className='my-4'>
                    <h3 className='font-bold text-2xl'>Como e quando tomar?</h3>
                    <p>Para saber como tomar creatina, o ideal é contar com o auxílio profissional. Em média, a Agência Nacional de Vigilância Sanitária (Anvisa) indica o consumo de 3 gramas por dia. No entanto, é possível alterar essa dosagem conforme a sua necessidade.</p>
                    <p>Além disso, pouco importa quando você tomar a creatina. Como os efeitos não são imediatos, é preciso fazer um consumo regular, sendo que pouco interfere se será antes ou depois do treino.</p>
                    <p>Outro fator relevante é o fato da maioria dos suplementos serem encontrados em pó. Por isso, é necessário diluir em água ou outra bebida da sua preferência.</p>
                </section>

                <section className='my-4'>
                    <h3 className='font-bold text-2xl'></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </section>
            </section>
            
        )
    }
}