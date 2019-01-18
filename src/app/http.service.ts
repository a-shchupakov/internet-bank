import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardModel} from './shared/card.model';
import {AskModel} from './shared/ask.model';
import {ValidationErrors} from '@angular/forms';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    private serverUrl = 'http://127.0.0.1:5000';
    private cardsApiUrl = this.serverUrl + '/bank/api/card-payments/';
    private askApiUrl = this.serverUrl + '/bank/api/ask-payments/';
    private validationApiUrl = this.serverUrl + '/bank/api/validation/';

    createCardPayment(cardPayment: CardModel) {
        return this.http.post<CardModel>(this.cardsApiUrl, cardPayment);
    }

    getCardPayments() {
        return this.http.get<CardModel[]>(this.cardsApiUrl);
    }

    markCardPayment(url: string) {
        return this.http.patch<CardModel>(this.serverUrl + url, {});
    }

    createAskPayment(askPayment: AskModel) {
        return this.http.post<AskModel>(this.askApiUrl, askPayment);
    }

    getAskedPayments() {
        return this.http.get<AskModel[]>(this.askApiUrl);
    }

    validateCardNumber(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'cardNumber/', { value: value });
    }

    validateCardCVC(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'cvc/', { value: value });
    }

    validateAmount(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'amount/', { value: value });
    }

    validateCardExpires(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'cardExpires/', { value: value });
    }

    validateComment(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'comment/', { value: value });
    }

    validateEmail(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'email/', { value: value });
    }

    validateINN(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'inn/', { value: value });
    }

    validateBIK(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'bik/', { value: value });
    }

    validateNDS(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'nds/', { value: value });
    }

    validateAccNumber(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'accNumber/', { value: value });
    }

    validateTelNumber(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'telNumber/', { value: value });
    }
}
