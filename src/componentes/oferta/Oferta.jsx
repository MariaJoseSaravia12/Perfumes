import Boton from "../boton/Boton.jsx";
import './oferta.css';

const handlerclickBoton=() => { 
   alert("Estas en zona de envíos")
 }

function Oferta() {
  return (
    <section className="oferta">
      <h2>Envío gratis en compras mayores a $1.000.000</h2>
      <Boton texto="Consulata zona de envíos"  onClick={handlerclickBoton}/>
    </section>
  );
}

export default Oferta;
