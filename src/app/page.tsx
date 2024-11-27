'use client'

import Image from "next/image";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from 'react';

const Homepage: React.FC = () => {
	const [search, setSearch] = useState<string>('');

	const router = useRouter();

	// Função para lidar com a mudança no input de busca
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	// Função para redirecionar o usuário para a página de resultados de produtos
	const handleSubmitToProductsPage = () => {
		if (search) {
			router.push(`/resultados-produtos?categoria=${search}`);
		}
	};

	// Função para redirecionar o usuário para a página de informação de categoria
	const handleSubmitToInformationPage = () => {
		if (search) {
			router.push(`/resultados-informacao?categoria=${search}`);
		}
	};

	
	return (
		<section className="flex justify-center mt-12">
      		<div className="pt-8">
				
				<div className="flex justify-center">
					<a><Image src="/logo.svg" alt="Supplipédia" width={458} height={132}></Image></a>
				</div>

				{/* Barra de busca */}
				<div className="flex justify-between items-center border border-preto rounded-full px-4 py-1 mt-8 bg-branco">
					<input 
						type="text" 
						placeholder="Buscar suplemento..." 
						value={search} 
						onChange={handleSearch}
						className="w-full h-8 border-none active:border-none focus:outline-none focus:ring-0"
					/>
					<IoMdSearch />
				</div>

				{/*Botões*/}
				<div className="flex justify-between space-x-4 py-5 px-4">
					<div>
					<PrimaryButton title={"Buscar produtos"} onClick={handleSubmitToProductsPage} aria-labelledby={"Buscar produtos"}/>
					</div>
					<div>
						<SecondaryButton title={"Pesquisa Supplipédia"} onClick={handleSubmitToInformationPage} aria-labelledby={"Pesquisar categoria"}/>
					</div>
				</div>
				
				<p className="flex justify-center mt-12">Supplipédia, seu guia de suplementação inteligente.</p>
			</div>
    	</section>
  	);
};

export default Homepage;
