import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-card-payments',
    templateUrl: './card-payments.component.html',
    styleUrls: ['./card-payments.component.css']
})
export class CardPaymentsComponent implements OnInit {
    cardPayments;

    constructor(private server: HttpService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.route.snapshot.queryParams) {
            this.cardPayments = this.server.getCardPaymentsWithParams(this.route.snapshot.queryParams);
        } else {
            this.cardPayments = this.server.getCardPayments();
        }
    }
}
