import '../styles/index.css'
import logo from "../img/logo.svg"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar__company">
        <img src={logo} alt="Soundwave logo" className='navbar__logo'></img>
        <p className="navbar__item">Soundwave</p>
      </div>
        <ul className='navbar__list'>
          <li className='navbar__item navbar-options'>Discover</li>
          <li className='navbar__item navbar-options'>Join</li>
        </ul> 
    </nav>
  );
}

export default Navbar;
