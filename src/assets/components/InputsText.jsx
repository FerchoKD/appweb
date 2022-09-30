import "../styles/Inputs.css"
import "../styles/contenedor.css"

function InputsText() {
  return (
    <div className="centrar">
      <label>Nombre:</label>
      <input type="text" className="inputs"/>
      <br></br>
      <label>Apellido:</label>
      <input type="text" className="inputs"/>
    </div>
  );
}

export default InputsText;
