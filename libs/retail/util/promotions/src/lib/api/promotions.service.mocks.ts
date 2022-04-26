import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
 * Mocks provider for /promotions/submit URL pattern
 */
export const PromotionsHttpServiceSubmitPromotionFormMocksProvider: Provider = createMocks([
  {
    urlPattern: '/promotions/submit',
    method: 'POST',
    responses: [
      {
        status: 200,
        body: [
          {
            id: 1,
            fee: '$25',
            vendor: 'mastercard',
            heading: 'Premium Advantage',
            name: 'Unlimited Cash Rewards',
            description: 'Earn unlimited 1.5% cash back on all purchases everywhere, every time.',
          },
          {
            id: 2,
            fee: '$0',
            vendor: 'visa',
            heading: 'Business Advantage',
            name: 'Travel Rewards',
            description: 'Earn 1% travel points back on all purchases everywhere, every time.',
          },
          {
            id: 3,
            fee: '$5',
            vendor: 'mastercard',
            heading: 'Platinum Advantage',
            name: 'Cash back Rewards',
            description: 'Earn 0.5% cash back on all purchases everywhere, every time.',
          },
          {
            id: 4,
            fee: '$12',
            vendor: 'visa',
            heading: 'Business Advantage',
            name: 'Gas Rewards',
            description: 'Earn 1.5% gas points on all purchases everywhere, every time.',
          },
          {
            id: 5,
            fee: '$20',
            vendor: 'visa',
            heading: 'Business Advantage',
            name: 'Airline Rewards',
            description: 'Earn 1.5% miles back on all purchases everywhere, every time.',
          },
          {
            id: 6,
            fee: '$15',
            vendor: 'visa',
            heading: 'Premium Advantage',
            name: 'Hotel Rewards',
            description: 'Earn 1% hotel points back on all purchases everywhere, every time.',
          },
          {
            id: 7,
            fee: '$10',
            vendor: 'mastercard',
            heading: 'Business Advantage',
            name: '0% Purchase APR',
            description: 'Earn rewards on purchases and 0% APRs on balance transfers.',
          },
          {
            id: 8,
            fee: '$10',
            vendor: 'visa',
            heading: 'Platinum Advantage',
            name: 'Unlimited Cash Rewards',
            description: 'Earn unlimited 2% cash back on all purchases everywhere, every time.',
          },
          {
            id: 9,
            fee: '$5',
            vendor: 'mastercard',
            heading: 'Business Advantage',
            name: 'Points Rewards',
            description: 'Earn unlimited 1.5% points back on all purchases everywhere, every time.',
          },
          {
            id: 10,
            fee: '$15',
            vendor: 'mastercard',
            heading: 'Premium Advantage',
            name: 'Miles Rewards',
            description: 'Earn unlimited 1% miles points on all purchases everywhere, every time.',
          },
        ],
      },
    ],
  },
]);

export const PromotionsHttpServiceMocksProvider: Provider = createMocks([
  {
    urlPattern: '/promotions/submit',
    method: 'POST',
    responses: [
      {
        status: 200,
        body: [
          {
            id: 1,
            fee: '$25',
            vendor: 'mastercard',
            heading: 'Premium Advantage',
            name: 'Unlimited Cash Rewards',
            description: 'Earn unlimited 1.5% cash back on all purchases everywhere, every time.',
          },
          {
            id: 2,
            fee: '$0',
            vendor: 'visa',
            heading: 'Business Advantage',
            name: 'Travel Rewards',
            description: 'Earn 1% travel points back on all purchases everywhere, every time.',
          },
          {
            id: 3,
            fee: '$5',
            vendor: 'mastercard',
            heading: 'Platinum Advantage',
            name: 'Cash back Rewards',
            description: 'Earn 0.5% cash back on all purchases everywhere, every time.',
          },
          {
            id: 4,
            fee: '$12',
            vendor: 'visa',
            heading: 'Business Advantage',
            name: 'Gas Rewards',
            description: 'Earn 1.5% gas points on all purchases everywhere, every time.',
          },
          {
            id: 5,
            fee: '$20',
            vendor: 'visa',
            heading: 'Business Advantage',
            name: 'Airline Rewards',
            description: 'Earn 1.5% miles back on all purchases everywhere, every time.',
          },
          {
            id: 6,
            fee: '$15',
            vendor: 'visa',
            heading: 'Premium Advantage',
            name: 'Hotel Rewards',
            description: 'Earn 1% hotel points back on all purchases everywhere, every time.',
          },
          {
            id: 7,
            fee: '$10',
            vendor: 'mastercard',
            heading: 'Business Advantage',
            name: '0% Purchase APR',
            description: 'Earn rewards on purchases and 0% APRs on balance transfers.',
          },
          {
            id: 8,
            fee: '$10',
            vendor: 'visa',
            heading: 'Platinum Advantage',
            name: 'Unlimited Cash Rewards',
            description: 'Earn unlimited 2% cash back on all purchases everywhere, every time.',
          },
          {
            id: 9,
            fee: '$5',
            vendor: 'mastercard',
            heading: 'Business Advantage',
            name: 'Points Rewards',
            description: 'Earn unlimited 1.5% points back on all purchases everywhere, every time.',
          },
          {
            id: 10,
            fee: '$15',
            vendor: 'mastercard',
            heading: 'Premium Advantage',
            name: 'Miles Rewards',
            description: 'Earn unlimited 1% miles points on all purchases everywhere, every time.',
          },
        ],
      },
    ],
  },
]);
