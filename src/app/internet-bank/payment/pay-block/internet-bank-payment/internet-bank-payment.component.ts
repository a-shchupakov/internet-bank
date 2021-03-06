import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../../../shared/validation.service';
import {FormStorageService} from '../../../../shared/form-storage.service';

@Component({
    selector: 'app-internet-bank-payment',
    templateUrl: './internet-bank-payment.component.html',
    styleUrls: ['../../payment.component.css', './internet-bank-payment.component.css']
})
export class InternetBankPaymentComponent implements OnInit {
    internetPayment: FormGroup;

    constructor(private validation: ValidationService, private formStorage: FormStorageService) {
    }

    ngOnInit() {
        const savedForm = this.formStorage.getInternetPayment();
        if (savedForm) {
            this.internetPayment = savedForm;
            return;
        }

        this.internetPayment = new FormGroup({
            iPaymentWho: new FormControl('',
                [
                    Validators.required
                ],
                [
                    this.validation.validateINN.bind(this.validation)
                ]),
            iPaymentBIK: new FormControl(null,
                [
                    Validators.required
                ],
                [
                    this.validation.validateBIK.bind(this.validation)
                ]),
            iPaymentNumber: new FormControl(null,
                [
                    Validators.required
                ],
                [
                    this.validation.validateAccNumber.bind(this.validation)
                ]),
            iPaymentNDS: new FormControl(null,
                [
                    Validators.required
                ],
                [
                    this.validation.validateNDS.bind(this.validation)
                ]),
            iPaymentAmount: new FormControl(null,
                [
                    Validators.required
                ],
                [
                    this.validation.validateAmount.bind(this.validation)
                ])
        });

        this.formStorage.setInternetPayment(this.internetPayment);
    }

    onSubmit() {
        console.log(this.internetPayment);
    }
}
