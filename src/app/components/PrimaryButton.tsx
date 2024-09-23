'use client'

import { useId } from 'react';

interface PrimaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {

    const buttonId = useId();

    return(

        <button title={props.title} aria-labelledby={buttonId} onClick={props.onClick} className="w-auto bg-verde text-preto rounded-md px-8 py-3 flex flex-row place-content-center items-center text-base hover:bg-preto hover:text-branco active:translate-y-0.5">

            <div id={buttonId} className="px-4">
                {props.title}
            </div>

        </button>
        
    );
}