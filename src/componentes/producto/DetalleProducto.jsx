import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './detalleProducto.css';
import Boton from "../boton/Boton";

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProducto(res.data))
      .catch((err) => console.error("Error al cargar producto", err));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <section className="detalle-producto">
      <div className="detalle-contenido">
        <img src={producto.thumbnail} alt={producto.title} className="detalle-img" />

        <div className="detalle-info">
          <h2>{producto.title}</h2>
          <p className="descripcion">{producto.description}</p>

          <div className="detalle-datos">
            <p><strong>Precio:</strong> ${producto.price}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
            <p><strong>Código:</strong> {producto.id}</p>
          </div>

          <Boton
            texto="Agregar al carrito"
            onClick={() => alert(`Producto "${producto.title}" agregado al carrito`)}
          />
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
