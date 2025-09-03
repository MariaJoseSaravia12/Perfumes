import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';
import Footer from './componentes/footer/Footer.jsx';
import Header from './componentes/header/Header.jsx';
import Menu from './componentes/menu/Menu.jsx';
import Intro from './componentes/intro/Intro.jsx';
import Productos from './componentes/lista/Productos.jsx';
import Oferta from './componentes/oferta/Oferta.jsx';
import DetalleProducto from './componentes/producto/DetalleProducto.jsx';
import Registro from './componentes/auth/Registro.jsx';
import Login from './componentes/auth/Login.jsx';

function AppContent() {
  const { pathname } = useLocation();

  return (
    <>
      <Header/>
      <Menu/>
      <main className="main">
        {/* Intro solo en inicio si querés */}
        {pathname === '/' && <Intro/>}

        <Routes>
          <Route path="/" element={<Productos/>} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Oferta solo en inicio */}
        {pathname === '/' && <Oferta/>}
      </main>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

