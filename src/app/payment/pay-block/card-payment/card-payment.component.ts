import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CardModel} from '../../../shared/card.model';
import {HttpService} from '../../../http.service';

@Component({
    selector: 'app-card-payment',
    templateUrl: './card-payment.component.html',
    styleUrls: ['./card-payment.component.css', '../../payment.component.css']
})
export class CardPaymentComponent implements OnInit {
    cardPayment: FormGroup;
    cardNumberRegex = /^(\d{4} ){3}\d{4}$/;
    cardExpiresRegex = '\\d{2}/\\d{2}';
    cardCVCRegex = /^\d{3}$/;

    constructor(private server: HttpService) {
    }

    ngOnInit() {
        this.cardPayment = new FormGroup({
            cardInfo: new FormGroup({
                cardNumber: new FormControl('1111 1111 1111 1111',
                    [
                        Validators.required,
                        Validators.pattern(this.cardNumberRegex)
                    ]),
                cardExpires: new FormControl('33/33',
                    [
                        Validators.required,
                        Validators.pattern(this.cardExpiresRegex)
                    ]),
                cardCVC: new FormControl('333',
                    [
                        Validators.required,
                        Validators.pattern(this.cardCVCRegex)
                    ])
            }),
            paymentInfo: new FormGroup({
                paymentAmount: new FormControl(1000,
                    [
                        Validators.required,
                        Validators.max(75000),
                        Validators.min(1000)
                    ]),
                paymentComment: new FormControl(null, Validators.maxLength(150)),
                paymentEmail: new FormControl('test@te.com',
                    [
                        Validators.required,
                        Validators.email
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
