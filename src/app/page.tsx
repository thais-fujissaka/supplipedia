'use client'

import Image from "next/image";
import { useState } from 'react';

const Homepage: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

	return (
		<div className="bg-branco flex justify-center items-center mt-12">
      		<div className="relative">
				<div>
					<a><Image src="/logo.svg" alt="Supplipédia" width={458} height={132}></Image></a>
				</div>

				{/* Slogan */}
				<p className="flex justify-center top-8">O seu guia de suplementação inteligente.</p>

				{/* Barra de busca */}
				<div>
					<input 
						type="text" 
						placeholder="Buscar suplemento..." 
						value={search} 
						onChange={handleSearch} 
					/>
					<button onClick={() => alert(`Buscando ${search}`)}>Buscar</button>
				</div>
			</div>
    	</div>
  	);
};

export default Homepage;
