import './header.css';
import logoImg from '../../assets/img/logo_perfume.png';

function Header() {
  

  return (
    <>    
      <header className="header">
  <div className="logo-container">
    <img src={logoImg} alt="Logo Perfumeria" />
    
  </div>
  
</header>

    </>
  )
}

export default Header
