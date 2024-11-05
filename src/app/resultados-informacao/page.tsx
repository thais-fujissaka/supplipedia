'use client'

import { useSearchParams } from "next/navigation"
import { getStrategy } from '../strategies/informacao/InformacaoStrategy';

const ResultadosInformacao: React.FC = () => {
  
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria"); // Capturar a categoria da query string
  const strategy = getStrategy(categoria || "");

  return (
    <section className="container mx-auto mt-12">

      <nav>
        {
          /* adicionar html do navbar que contém os filtros por categoria map (?) ou strategy (?) */
        }
      </nav>

      {/* Informações da categoria */}
      <article>
        {categoria ? (
          strategy.render()
      ) : (
        <p>Nenhum produto encontrado para a categoria.</p>
      )}</article>

    </section>
  );
};

export default ResultadosInformacao;