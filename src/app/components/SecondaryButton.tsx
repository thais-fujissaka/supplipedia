'use client'

import { useId } from 'react';

interface SecondaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function SecondaryButton(props: SecondaryButtonProps) {

    const buttonId = useId();

    return(

        <button title={props.title} aria-labelledby={buttonId} onClick={props.onClick} className="w-auto bg-preto text-branco rounded-md px-8 py-3 flex flex-row place-content-center items-center text-base hover:bg-verdeClaro hover:text-preto active:translate-y-0.5">

            <div id={buttonId} className="px-4">
                {props.title}
            </div>

        </button>
        
    );
}