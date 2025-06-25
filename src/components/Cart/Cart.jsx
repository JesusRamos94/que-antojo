import './Cart.scss'
import { Link } from 'react-router-dom'

export const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>No hay productos en tu carrito.</p>
          <Link to="/" className="cart-link">Volver a la tienda</Link>
        </div>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio total: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}