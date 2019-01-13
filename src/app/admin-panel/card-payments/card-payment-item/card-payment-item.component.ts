import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../../shared/card.model';
import {HttpService} from '../../../http.service';

@Component({
    selector: 'app-card-payment-item',
    templateUrl: './card-payment-item.component.html',
    styleUrls: ['./card-payment-item.component.css']
})
export class CardPaymentItemComponent implements OnInit {
    @Input() paymentItem: CardModel;

    constructor(private server: HttpService) {
    }

    ngOnInit() {
    }

    markUnsafe() {
        this.server.markCardPayment(this.paymentItem.url).subscribe(value => this.paymentItem = value);
    }
}
