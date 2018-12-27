import { Component, OnInit } from '@angular/core';
import {Company} from '../../company-header/company.model';
import {CompanyService} from '../../company.service';

@Component({
  selector: 'app-ask-for-payment-block',
  templateUrl: './ask-for-payment-block.component.html',
  styleUrls: ['./ask-for-payment-block.component.css', '../payment.component.css']
})
export class AskForPaymentBlockComponent implements OnInit {
    company: Company;

    constructor(private personService: CompanyService) { }

    ngOnInit() {
        this.company = this.personService.getPerson();
    }

}
