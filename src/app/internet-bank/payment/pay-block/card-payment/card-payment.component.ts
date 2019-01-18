import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../../http.service';
import {CardModel} from '../../../../shared/card.model';
import {ValidationService} from '../../../../shared/validation.service';

@Component({
    selector: 'app-card-payment',
    templateUrl: './card-payment.component.html',
    styleUrls: ['../../payment.component.css', './card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {
    cardPayment: FormGroup;

    constructor(private server: HttpService, private validation: ValidationService) {
    }

    ngOnInit() {
        this.cardPayment = new FormGroup({
            cardInfo: new FormGroup({
                cardNumber: new FormControl('1111222233334444',
                    [
                        Validators.required
                    ], [
                        this.validation.validateCardNumber.bind(this.validation)
                    ]),
                cardExpires: new FormControl('33/33',
                    [
                        Validators.required,
                    ], [
                        this.validation.validateCardExpires.bind(this.validation)
                    ]),
                cardCVC: new FormControl('333',
                    [
                        Validators.required,
                    ], [
                        this.validation.validateCardCVC.bind(this.validation)
                    ])
            }),
            paymentInfo: new FormGroup({
                paymentAmount: new FormControl(1000,
                    [
                        Validators.required,
                    ], [
                        this.validation.validateAmount.bind(this.validation)
                    ]),
                paymentComment: new FormControl(null, Validators.maxLength(150)),
                paymentEmail: new FormControl('test@te.com',
                    [
                        Validators.required,
                    ], [
                        this.validation.validateEmail.bind(this.validation)
                    ])
            })
        });
    }

    onSubmit() {
        const cardNumber = this.cardPayment.get('cardInfo.cardNumber').value;
        const cardExpires = this.cardPayment.get('cardInfo.cardExpires').value;
        const cardCVC = this.cardPayment.get('cardInfo.cardCVC').value;
        const amount = this.cardPayment.get('paymentInfo.paymentAmount').value;
        const comment = this.cardPayment.get('paymentInfo.paymentComment').value;
        const email = this.cardPayment.get('paymentInfo.paymentEmail').value;

        const card = new CardModel(cardNumber, cardExpires, cardCVC, amount, comment, email, true, '');
        this.server.createCardPayment(card).subscribe();
    }
}
