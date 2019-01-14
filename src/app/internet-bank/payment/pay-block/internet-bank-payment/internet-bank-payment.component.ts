import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
        this.internetPayment = new FormGroup({
            iPaymentWho: new FormControl(null,
                [
                    Validators.required
                ]),
            iPaymentBIK: new FormControl(null,
                [
                    Validators.required
                ]),
            iPaymentNumber: new FormControl(null,
                [
                    Validators.required
                ]),
            iPaymentNDS: new FormControl(null,
                [
                    Validators.required
                ]),
            iPaymentAmount: new FormControl(null,
                [
                    Validators.required
                ])
        });
    }

    onSubmit() {
        console.log(this.internetPayment);
    }
}
