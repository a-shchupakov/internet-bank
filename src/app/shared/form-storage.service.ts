import {FormGroup} from '@angular/forms';

export class FormStorageService {
    cardPayment: FormGroup;
    internetPayment: FormGroup;
    askPayment: FormGroup;

    public setCardPayment(form: FormGroup) {
        this.cardPayment = form;
    }
    public getCardPayment() {
        return this.cardPayment;
    }

    public setInternetPayment(form: FormGroup) {
        this.internetPayment = form;
    }
    public getInternetPayment() {
        return this.internetPayment;
    }

    public setAskPayment(form: FormGroup) {
        this.askPayment = form;
    }
    public getAskPayment() {
        return this.askPayment;
    }
}
