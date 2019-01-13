import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
    selector: 'app-card-payments',
    templateUrl: './card-payments.component.html',
    styleUrls: ['./card-payments.component.css']
})
export class CardPaymentsComponent implements OnInit {
    cardPayments = this.server.getCardPayments();

    constructor(private server: HttpService) {
    }

    ngOnInit() { }
}
