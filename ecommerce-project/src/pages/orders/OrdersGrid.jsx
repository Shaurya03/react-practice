import dayjs from 'dayjs';
import { OrderHeader } from './OrderHeader';
import { Fragment } from 'react';
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';

export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order={order} />

            <div className="order-details-grid">
              {order.products.map((orderProduct) => {
                return (
                  <Fragment key={orderProduct.product.id}>
                    <div className="product-image-container">
                      <img src={orderProduct.product.image} />
                    </div>

                    <div className="product-details">
                      <div className="product-name">
                        {orderProduct.product.name}
                      </div>
                      <div className="product-delivery-date">
                        Arriving on: {dayjs(orderProduct.estimatedDeliverytimeMs)
                          .format('MMMM D')}
                      </div>
                      <div className="product-quantity">
                        Quantity: {orderProduct.quantity}
                      </div>
                      <button className="buy-again-button button-primary">
                        <img className="buy-again-icon" src={BuyAgainIcon} />
                        <span className="buy-again-message">Add to Cart</span>
                      </button>
                    </div>

                    <div className="product-actions">
                      <a href="/tracking">
                        <button className="track-package-button button-secondary">
                          Track package
                        </button>
                      </a>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}