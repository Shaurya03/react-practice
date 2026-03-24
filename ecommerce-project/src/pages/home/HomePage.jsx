import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data);
    };
    
    fetchHomeData();
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Ecommerce Project</title>
        <link rel="icon" href="images/home-favicon.png" />
      </Helmet>
      
      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}