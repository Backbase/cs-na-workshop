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
  "lastName" : "Doe",
  "streetAddress" : "1201 Peachtree Street NE",
  "city" : "Atlanta",
  "state" : "GA",
  "zip" : 30361,
  "phone" : 4048792261
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
  "lastName" : "Doe",
  "streetAddress" : "1201 Peachtree Street NE",
  "city" : "Atlanta",
  "state" : "GA",
  "zip" : 30361,
  "phone" : 4048792261
}
            },
    ]
},
]
);


