'use client';

import { MdDehaze } from "react-icons/md";
import Image from 'next/image';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const navLinks = [
        { title: 'Homepage', path: '/' },
        { title: 'Sobre nós', path: '/sobre-nos' }
    ]

    const [openMenu, setOpenMenu] = useState(false);

    const pathname = usePathname();

    return (
        <header className="border border-preto fixed top-0 left-0 w-screen px-8 pt-4 pb-8 flex flex-col lg:items-center justify-between lg:flex-row bg-branco">
            <div className="flex justify-between">
                <a href="/" aria-label="Ir para página inicial" className="lg:mr-64 2xl:mr-96">
                    <Image className="-translate-x-10 sm:translate-x-0" src="/logo.svg" alt="Logo da Supplipédia" width="196" height="70" />
                </a>
                <button type="button"
                    className={`${openMenu ? 'hidden' : ''} text-4xl text-preto lg:hidden`}
                    onClick={() => setOpenMenu(true)}
                    aria-label="Abrir menu"
                >
                    <MdDehaze />
                </button>
            </div>
            {openMenu && <div className="fixed left-0 top-0 h-screen w-full bg-brancoBX opacity-40 z-40 animate-appear lg:hidden" onClick={() => setOpenMenu(false)}/>}
            <nav className={`${!openMenu ? 'translate-x-full lg:translate-x-0' : 'translate-x-0'} transform transition-transform duration-300 ease-out z-40 bg-branco p-8 flex flex-col rounded-bl-lg text-verdeBX fixed w-80 h-screen right-0 top-0 space-y-4 border-l border-b lg:w-max lg:flex-row lg:justify-end lg:space-y-0 lg:grow lg:relative lg:bg-transparent lg:h-min lg:p-0 lg:border-none`}>
                <button type="button"
                    className="mt-4 text-4xl text-preto self-end lg:hidden"
                    onClick={() => setOpenMenu(false)}
                    aria-label="Fechar menu"
                >
                <MdDehaze />
                </button>
                {navLinks.map(link => (
                    <a key={link.path} 
                        href={link.path} 
                        className={`border-b border-branco text-2xl px-4 hover:font-bold ${pathname == link.path ? 'text-preto' : ''} lg:text-sm lg:border-none ${!openMenu ? 'hidden lg:inline-block' : ''}`}
                    >
                        {link.title}
                    </a>
                ))}
            </nav>
        </header>
    );
}

