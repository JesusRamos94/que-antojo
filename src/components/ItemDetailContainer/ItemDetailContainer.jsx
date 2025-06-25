import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../data/products';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';

export const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = new Promise(resolve => {
      setTimeout(() => {
        resolve(products.find(p => p.id === id));
      }, 1000);
    });

    fetchProduct.then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className='item-detail-container'>
      {loading ? <Loader /> : <ItemDetail product={product} addToCart={addToCart} />}
    </div>
  );
};
