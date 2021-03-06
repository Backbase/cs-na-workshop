import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { Promotion } from '@backbase/retail/util/promotions';
import { PaymentCard } from '@backbase/ui-ang';

@Component({
  selector: 'promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PromotionCardComponent implements OnInit {
  @Input() item!: Promotion;
  @Output() select = new EventEmitter();

  // Default promo card
  promoCard: PaymentCard = {
    name: 'New',
    number: '0000',
    vendor: 'mastercard',
    expirationDate: new Date(),
    cardName: 'Backbase Gold Card',
  };

  ngOnInit() {
    this.promoCard.vendor = this.item.vendor;
  }
}
