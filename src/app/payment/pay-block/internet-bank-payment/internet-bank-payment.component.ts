import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-internet-bank-payment',
    templateUrl: './internet-bank-payment.component.html',
    styleUrls: ['./internet-bank-payment.component.css', '../../payment.component.css']
})
export class InternetBankPaymentComponent implements OnInit {
    internetPayment: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.internetPayment = new FormGroup({});
    }

}
