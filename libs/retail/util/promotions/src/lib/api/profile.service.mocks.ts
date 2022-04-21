import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
 * Mocks provider for /users/me/profile URL pattern
 */
export const ProfileHttpServiceGetUserProfileMocksProvider: Provider = createMocks([
  {
    urlPattern: '/users/me/profile',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          firstName: 'Jane',
          middleName: 'Ann',
          lastName: 'Doe',
          email: 'email@backbase.com',
          phoneNumber: 4048792261,
          ssn: 1234,
          address: {
            line1: '1201 Peachtree Street NE',
            city: 'Atlanta',
            state: 'Georgia',
            zipCode: 30361,
          },
          employmentStatus: 'Full-Time',
          maritalStatus: 'Married',
        },
      },
    ],
  },
]);
/**
 * Mocks provider for /users/me/promotion URL pattern
 */
export const ProfileHttpServiceGetUserPromotionsMocksProvider: Provider = createMocks([
  {
    urlPattern: '/users/me/promotion',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          registered: false,
          promotions: [],
        },
      },
    ],
  },
]);

export const ProfileHttpServiceMocksProvider: Provider = createMocks([
  {
    urlPattern: '/users/me/profile',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          firstName: 'Jane',
          middleName: 'Ann',
          lastName: 'Doe',
          email: 'email@backbase.com',
          phoneNumber: 4048792261,
          ssn: 1234,
          address: {
            line1: '1201 Peachtree Street NE',
            city: 'Atlanta',
            state: 'Georgia',
            zipCode: 30361,
          },
          employmentStatus: 'Full-Time',
          maritalStatus: 'Married',
        },
      },
    ],
  },
  {
    urlPattern: '/users/me/promotion',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          registered: false,
          promotions: [],
        },
      },
    ],
  },
]);
