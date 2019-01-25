import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-card-payments',
    templateUrl: './card-payments.component.html',
    styleUrls: ['./card-payments.component.css']
})
export class CardPaymentsComponent implements OnInit {
    cardPayments = this.server.getCardPayments(this.route.snapshot.queryParams);

    constructor(private server: HttpService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {}
}
