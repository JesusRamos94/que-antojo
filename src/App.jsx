import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';

function App() {
const [cart, setCart] = useState([]);

const addToCart = (product, quantity) => {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
    ));
  } else {
    setCart([...cart, { ...product, quantity }]);
  }
};

const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};

const getCartQuantity = () =>
  cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      <NavBar cartQuantity={getCartQuantity()} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
