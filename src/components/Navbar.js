// import '../styles/index.css'
import logo from "../img/logo.svg"
import {Link} from "react-router-dom"
import Router from '../applications/Router';
import '../pages/Discover';
import '../pages/Join';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar__company">
        <Link to="/"> <img src={logo} alt="Soundwave logo" className='navbar__logo'></img></Link>
        <p className="navbar__item">Soundwave</p>
      </div>
        <ul className='navbar__list'>
        <Link to="/discover"><li className='navbar__item navbar-options'>Discover</li></Link>
        <Link to="/join"><li className='navbar__item navbar-options'>Join</li></Link>
        </ul> 
    </nav>
  );
}

export default Navbar;
