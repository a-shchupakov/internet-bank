import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardModel} from './shared/card.model';
import {AskModel} from './shared/ask.model';
import {ValidationErrors} from '@angular/forms';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    private serverUrl = 'http://127.0.0.1:5000';
    private cardsApiUrl = 'http://127.0.0.1:5000/bank/api/card-payments/';
    private askApiUrl = 'http://127.0.0.1:5000/bank/api/ask-payments/';
    private validationApiUrl = 'http://127.0.0.1:5000/validation/true/';

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

    validate() {
        return this.http.get<ValidationErrors>(this.validationApiUrl);
    }
}
