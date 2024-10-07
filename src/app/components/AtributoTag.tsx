interface AtributoProps{
    title: string;
}

export default function AtributoTag(props: AtributoProps) {

    return(

        <div className="">
            {props.title}
        </div>
        
    );
}