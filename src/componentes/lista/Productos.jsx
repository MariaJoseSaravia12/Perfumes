import { useEffect, useState } from "react";
import axios from "axios";
import CardProducto from "../producto/CardProducto";
import "./productos.css"; // Asegurate de importar el CSS

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category/fragrances")
      .then((res) => setProductos(res.data.products))
      .catch((err) => console.error("Error al obtener productos", err));
  }, []);

  return (
    <div className="productos">
      {productos.map((producto) => (
        <CardProducto key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Productos;




