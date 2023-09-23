import './inpunt.css';
function RandonNumver() {
    
}
function InpuntNumber() {
    return (
        <div class="contenedor">
          <h2>Ingresa un número:</h2>
          <input type="number" min={1} max={10} id="numeroInput" placeholder="Escribe un número"/>
        </div>
    )
}

export default InpuntNumber;