import {Component, Input, OnInit} from '@angular/core';
import {AskModel} from '../../../shared/ask.model';

@Component({
    selector: 'app-ask-payment-item',
    templateUrl: './ask-payment-item.component.html',
    styleUrls: ['./ask-payment-item.component.css']
})
export class AskPaymentItemComponent implements OnInit {
    @Input() askedPayment: AskModel;

    constructor() {
    }

    ngOnInit() { }

}
