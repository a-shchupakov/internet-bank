import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-asked-payments',
    templateUrl: './asked-payments.component.html',
    styleUrls: ['./asked-payments.component.css']
})
export class AskedPaymentsComponent implements OnInit {
    askedPayments;

    constructor(private server: HttpService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.route.snapshot.queryParams) {
            this.askedPayments = this.server.getAskedPaymentsWithParams(this.route.snapshot.queryParams);
        } else {
            this.askedPayments = this.server.getAskedPayments();
        }
    }

}
