// import '../styles/index.css'
import logo from "../img/logo.svg"
import {Link, NavLink} from "react-router-dom"
// import Router from '../applications/Router';
import '../pages/Discover';
import '../pages/Join';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar__company">
        <Link to="/"> <img src={logo} alt="Soundwave logo" className='navbar__logo'></img></Link>
        <p className="navbar__item">Soundwave</p>
      </div>
        <ul className='navbar__list '>
        <NavLink to="/discover" className={({isActive}) => isActive ? 'navbar-item navbar-item--active' : 'navbar-item'}>Discover</NavLink>
        <NavLink to="/join" className={({isActive}) => isActive ? 'navbar-item navbar-item--active' : 'navbar-item'}>Join</NavLink>
        </ul> 
    </nav>
  );
}

export default Navbar;
