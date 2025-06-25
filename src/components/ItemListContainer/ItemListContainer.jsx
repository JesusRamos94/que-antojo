import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../data/products';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = new Promise(resolve => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
      }, 1000);
    });

    fetchProducts.then(data => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Postres ${categoryId}` : "Todos los Postres"}</h2>
      {loading ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};
