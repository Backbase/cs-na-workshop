import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
* Mocks provider for /card-promotion/accept URL pattern
*/
export const CardPromotionHttpServiceAcceptCardPromotionMocksProvider: Provider = createMocks([{
        urlPattern: "/card-promotion/accept",
        method: "POST",
        responses: [
                {
                    status: 200,
                    body: { }
                },
    ]
}]);
/**
* Mocks provider for /card-promotion/submit URL pattern
*/
export const CardPromotionHttpServiceSubmitCardPromotionDataMocksProvider: Provider = createMocks([{
        urlPattern: "/card-promotion/submit",
        method: "POST",
        responses: [
                {
                    status: 200,
                    body: [ {
  "id" : 1235749828,
  "name" : "Hotels.com Rewards Visa Credit Card",
  "heading" : "Unlock your next escape",
  "description" : "<p><strong>Get 2 reward nights worth $250 total (max $125 per night)*</strong> when you spend <strong>$1,000</strong> in purchases in the first 3 months</p><p><sup>*</sup>Excludes taxes and fees. If a night costs less than $125, you won't get the difference.</p>",
  "image" : "https://creditcards.wellsfargo.com/W-Card-PaidDigital/v12-1/images/Products/HotelRewards/hotels_card_art_d.png"
}, {
  "id" : 4562817599,
  "name" : "Reflect Card",
  "heading" : "Enjoy our lowest intro APR for up to 21 months",
  "description" : "<p><strong>0% intro APR for 18 months</strong> from account opening on purchases and qualifying balance transfers.</p><p><strong>Intro APR extension of up to3 months</strong> with on-time minimum payments during the introductory and extension periods.</p><p><strong>13.24% to 25.24% variable APR</strong>thereafter. Balance transfers made within 120 days qualify for the intro rate and fee.</p>",
  "image" : "https://creditcards.wellsfargo.com/W-Card-PaidDigital/v12-1/images/Products/Reflect/Reflect_hero_d.png"
}, {
  "id" : 789121635,
  "name" : "Active Cash Card",
  "heading" : "Earn unlimited 2% cash rewards on purchases",
  "description" : "<p><strong>Earn a $200 cash rewards bonus</strong> when you spend $1,000 in purchases in the first 3 months.</p><p><strong>0% intro APR for 15 months</strong> from account opening on purchases and qualifying balance transfers.</p><p><strong>15.24%, 20.24% or 25.24%</strong>variableAPR thereafter. Balance transfers made within 120 days qualify for the intro rate and fee.</p>",
  "image" : "https://creditcards.wellsfargo.com/W-Card-PaidDigital/v12-1/images/Products/ActiveCash/active_cash_card.png"
} ]
                },
    ]
}]);

export const CardPromotionHttpServiceMocksProvider: Provider = createMocks(
    [
    {
        urlPattern: "/card-promotion/accept",
        method: "POST",
        responses: [

            {
                status: 200,
                body: { }
            },
    ]
},
    {
        urlPattern: "/card-promotion/submit",
        method: "POST",
        responses: [

            {
                status: 200,
                body: [ {
  "id" : 1235749828,
  "name" : "Hotels.com Rewards Visa Credit Card",
  "heading" : "Unlock your next escape",
  "description" : "<p><strong>Get 2 reward nights worth $250 total (max $125 per night)*</strong> when you spend <strong>$1,000</strong> in purchases in the first 3 months</p><p><sup>*</sup>Excludes taxes and fees. If a night costs less than $125, you won't get the difference.</p>",
  "image" : "https://creditcards.wellsfargo.com/W-Card-PaidDigital/v12-1/images/Products/HotelRewards/hotels_card_art_d.png"
}, {
  "id" : 4562817599,
  "name" : "Reflect Card",
  "heading" : "Enjoy our lowest intro APR for up to 21 months",
  "description" : "<p><strong>0% intro APR for 18 months</strong> from account opening on purchases and qualifying balance transfers.</p><p><strong>Intro APR extension of up to3 months</strong> with on-time minimum payments during the introductory and extension periods.</p><p><strong>13.24% to 25.24% variable APR</strong>thereafter. Balance transfers made within 120 days qualify for the intro rate and fee.</p>",
  "image" : "https://creditcards.wellsfargo.com/W-Card-PaidDigital/v12-1/images/Products/Reflect/Reflect_hero_d.png"
}, {
  "id" : 789121635,
  "name" : "Active Cash Card",
  "heading" : "Earn unlimited 2% cash rewards on purchases",
  "description" : "<p><strong>Earn a $200 cash rewards bonus</strong> when you spend $1,000 in purchases in the first 3 months.</p><p><strong>0% intro APR for 15 months</strong> from account opening on purchases and qualifying balance transfers.</p><p><strong>15.24%, 20.24% or 25.24%</strong>variableAPR thereafter. Balance transfers made within 120 days qualify for the intro rate and fee.</p>",
  "image" : "https://creditcards.wellsfargo.com/W-Card-PaidDigital/v12-1/images/Products/ActiveCash/active_cash_card.png"
} ]
            },
    ]
},
]
);


