'use client'

import Image from "next/image";
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

	// Função para redirecionar o usuário para a página de resultados
	const handleSubmit = () => {
		if (search) {
			router.push(`/resultados?categoria=${search}`);
		}
	};

	// Função para lidar com a tecla pressionada
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};
	
	return (
		<div className="bg-branco flex justify-center mt-12">
      		<div className="">
				
				<div>
					<a><Image src="/logo.svg" alt="Supplipédia" width={458} height={132}></Image></a>
				</div>

				{/* Barra de busca */}
				<div className="flex justify-between border border-preto rounded-full px-4 py-1 mt-8">
					<input 
						type="text" 
						placeholder="Buscar suplemento..." 
						value={search} 
						onChange={handleSearch}
						onKeyDown={handleKeyDown} // Adicionando o evento de tecla
						className="w-full focus:outline-none"
					/>
					<button onClick={handleSubmit}><IoMdSearch /></button>
				</div>

				{/*Botões*/}
				
				
				<p className="flex justify-center mt-12">O seu guia de suplementação inteligente.</p>
			</div>
    	</div>
  	);
};

export default Homepage;
