import "../styles/inputs2.css"

function InputFile() {
    return ( 
    <div className="centrar">
        <label>Ingrese una foto suya para añadirla a su credencial y de esta forma poder adquirir membresias</label>
        <input type="file" className="inputs2"/>
    </div> 
    );
}

export default InputFile;