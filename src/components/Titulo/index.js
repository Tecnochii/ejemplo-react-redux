import { useEffect, useState } from 'react';
import  './styles/titulo.css'


const Titulo = (props) => {

    let [textoTitulo, setTextoTitulo] = useState("No tiene titulo")

    useEffect(() => {
        // verificarTitulo()
        console.log("Corrio el useEffect");
    }, []);


    useEffect(() => {
        console.log("Segundo useEffect");
    },
        [textoTitulo])


    const verificarTitulo = () => {
        if (props.texto) {
            setTextoTitulo(props.texto)
        }
    }

    return (
        <>
            <h1 className="hello">{textoTitulo}</h1>
            <button onClick={verificarTitulo}>Verificar</button>


        </>

    )
}
export default Titulo;