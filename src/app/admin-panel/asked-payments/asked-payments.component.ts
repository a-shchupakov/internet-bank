import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
    selector: 'app-asked-payments',
    templateUrl: './asked-payments.component.html',
    styleUrls: ['./asked-payments.component.css']
})
export class AskedPaymentsComponent implements OnInit {
    askedPayments = this.server.getAskedPayments();

    constructor(private server: HttpService) {
    }

    ngOnInit() {
    }

}
