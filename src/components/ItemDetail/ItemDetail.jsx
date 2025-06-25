import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss';

export const ItemDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <div className='item-detail'>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <ItemCount quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};
