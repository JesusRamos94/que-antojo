import { Link } from 'react-router-dom';
import './Item.scss';

export const Item = ({ item }) => {
  return (
    <div className='item-card'>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`} className='item-link'>Ver más</Link>
    </div>
  );
};
