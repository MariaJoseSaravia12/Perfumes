import { Link } from 'react-router-dom';
import './menu.css';


function Menu() {
  

  return (
    <>  
  <nav className="nav">
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/registro">Registro</Link></li>
      <li><Link to="/login">Login</Link></li>  
    </ul>
  </nav>
    </>
  )
}

export default Menu