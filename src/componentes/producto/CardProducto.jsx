import { Link } from 'react-router-dom';
import Boton from "../boton/Boton.jsx";
import './cardProducto.css';


const CardProducto = ({ producto }) => {
  return (
    <div className="card-producto">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <p><strong>ID:</strong> {producto.id}</p>
      <Link to={`/producto/${producto.id}`}>
        <Boton texto='Ver Detalle'/>
      </Link>
    </div>
  );
};

export default CardProducto;

