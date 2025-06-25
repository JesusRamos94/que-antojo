import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = ({ cartQuantity }) => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to="/">Qué Antojo 🍰</Link>
      </div>
      <ul className='navbar__menu'>
        <li><Link to="/">Todos</Link></li>
        <li><Link to="/category/dulce">Dulces</Link></li>
        <li><Link to="/category/salado">Salados</Link></li>
      </ul>
      <div className='navbar__cart'>
      <Link to="/cart" className="cart-link">
        🛒 <span className='navbar__cart-count'>{cartQuantity}</span>
      </Link>
      </div>
    </nav>
  );
};
