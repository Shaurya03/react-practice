import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PaymentSummary } from './PaymentSummary';

describe('Payment Summary', () => {
  let paymentSummary;
  let loadCart;

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
});