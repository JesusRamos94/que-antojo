import './ItemCount.scss';

export const ItemCount = ({ quantity, setQuantity }) => {
  return (
    <div className='item-count'>
      <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(q => q + 1)}>+</button>
    </div>
  );
};
