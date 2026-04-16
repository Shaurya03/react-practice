import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { PaymentSummary } from './PaymentSummary';

vi.mock('axios');

describe('Payment Summary', () => {
  let paymentSummary;
  let loadCart;
  let user;

  beforeEach(() => {
    paymentSummary = {
      "totalItems": 24,
      "productCostCents": 46260,
      "shippingCostCents": 0,
      "totalCostBeforeTaxCents": 46260,
      "taxCents": 4626,
      "totalCostCents": 50886
    };

    loadCart = vi.fn();
    user = userEvent.setup();
  });

  it('displays the correct details', () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(screen.getByText('Items (24):')).toBeInTheDocument();

    expect(
      within(screen.getByTestId('payment-summary-product-cost'))
        .getByText('$462.60')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('payment-summary-shipping-cost')
    ).toHaveTextContent('$0');

    expect(
      screen.getByTestId('payment-summary-total-before-tax')
    ).toHaveTextContent('$462.60');

    expect(
      screen.getByTestId('payment-summary-tax')
    ).toHaveTextContent('$46.26');

    expect(
      screen.getByTestId('payment-summary-total')
    ).toHaveTextContent('$508.86');
  });

  it('places an order', async () => {
    function Location() {
      const location = useLocation();
      return <div data-testid="url-path">{location.pathname}</div>;
    }

    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        <Location />
      </MemoryRouter>
    );
    const placeOrderButton = screen.getByTestId('place-order-button');
    await user.click(placeOrderButton);

    expect(axios.post).toHaveBeenCalledWith('/api/orders');
    expect(loadCart).toHaveBeenCalled();
    expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');
  });
});