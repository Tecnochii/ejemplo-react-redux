import { useNavigate } from "react-router-dom";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";

const Home = () =>{
let navigate = useNavigate()

    return(
        <>
        
        <Titulo texto={"Hello"} />
        <Subtitulo/>
     
            <button onClick={() => navigate("/cities")} > Cities</button>

        </>
    )
}

export default Home;