import "../styles/contenedor.css";
import InputButton from "../components/InputButton";
import ParteDerecha from "./ParteDerecha";
import ParteIzquierda from "./ParteIzquierda";

function Contendor() {
  return (
    <>
      <div className="contenedor">
        <span>Suscribete</span>
        <div>
          <ParteIzquierda />
          <ParteDerecha />
        </div>
        <InputButton />
      </div>
    </>
  );
}

export default Contendor;
