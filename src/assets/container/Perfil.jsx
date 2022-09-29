import perfil from "../imgs/Profile.png"
import "../styles/Perfil.css"

function Perfil() {
    return ( 
        <div>
            <img className="perfil" src={perfil}></img>
        </div>
     );
}

export default Perfil;