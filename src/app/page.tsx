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

	// Função para lidar com a tecla pressionada
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSubmitToInformationPage();
		}
	};
	
	return (
		<section className="bg-branco flex justify-center mt-12">
      		<div className="">
				
				<div className="flex justify-center">
					<a><Image src="/logo.svg" alt="Supplipédia" width={458} height={132}></Image></a>
				</div>

				{/* Barra de busca */}
				<div className="flex justify-between items-center border border-preto rounded-full px-4 py-1 mt-8">
					<input 
						type="text" 
						placeholder="Buscar suplemento..." 
						value={search} 
						onChange={handleSearch}
						onKeyDown={handleKeyDown} // Adicionando o evento de tecla
						className="w-full focus:outline-none"
					/>
					<IoMdSearch />
				</div>

				{/*Botões*/}
				<div className="flex justify-between space-x-4 py-5 px-4">
					<PrimaryButton title={"Buscar suplementos"} onClick={handleSubmitToProductsPage} aria-labelledby={"Buscar suplementos"}/>
					<SecondaryButton title={"Pesquisa Supplipédia"} onClick={handleSubmitToInformationPage} aria-labelledby={"Pesquisa Supplipédia"}/>
				</div>
				
				<p className="flex justify-center mt-12">Supplipédia, seu guia de suplementação inteligente.</p>
			</div>
    	</section>
  	);
};

export default Homepage;
