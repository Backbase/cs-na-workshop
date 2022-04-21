import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
* Mocks provider for /users/me/profile URL pattern
*/
export const ProfileHttpServiceGetUserProfileMocksProvider: Provider = createMocks([{
        urlPattern: "/users/me/profile",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: {
  "firstName" : "Jane",
  "middleName" : "Ann",
  "lastName" : "Doe",
  "email" : "email@backbase.com",
  "phone" : 4048792261,
  "ssn" : 1234,
  "address" : {
    "streetAddress" : "1201 Peachtree Street NE",
    "city" : "Atlanta",
    "state" : "GA",
    "zip" : 30361
  }
}
                },
    ]
}]);
/**
* Mocks provider for /users/me/promotion URL pattern
*/
export const ProfileHttpServiceGetUserPromotionsMocksProvider: Provider = createMocks([{
        urlPattern: "/users/me/promotion",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: {
  "registered" : false,
  "promotions" : [ ]
}
                },
    ]
}]);

export const ProfileHttpServiceMocksProvider: Provider = createMocks(
    [
    {
        urlPattern: "/users/me/profile",
        method: "GET",
        responses: [

            {
                status: 200,
                body: {
  "firstName" : "Jane",
  "middleName" : "Ann",
  "lastName" : "Doe",
  "email" : "email@backbase.com",
  "phone" : 4048792261,
  "ssn" : 1234,
  "address" : {
    "streetAddress" : "1201 Peachtree Street NE",
    "city" : "Atlanta",
    "state" : "GA",
    "zip" : 30361
  }
}
            },
    ]
},
    {
        urlPattern: "/users/me/promotion",
        method: "GET",
        responses: [

            {
                status: 200,
                body: {
  "registered" : false,
  "promotions" : [ ]
}
            },
    ]
},
]
);


