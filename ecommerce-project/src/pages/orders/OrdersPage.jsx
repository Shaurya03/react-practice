import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid';
import './OrdersPage.css';


export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    }

    fetchOrdersData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Orders</title>
        <link rel="icon" href="images/orders-favicon.png" />
      </Helmet>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}