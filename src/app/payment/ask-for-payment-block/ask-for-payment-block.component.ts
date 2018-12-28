import { Component, OnInit } from '@angular/core';
import {Company} from '../../company-header/company.model';
import {CompanyService} from '../../company.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ask-for-payment-block',
  templateUrl: './ask-for-payment-block.component.html',
  styleUrls: ['./ask-for-payment-block.component.css', '../payment.component.css']
})
export class AskForPaymentBlockComponent implements OnInit {
    company: Company;
    askPayment: FormGroup;

    constructor(private personService: CompanyService) { }

    ngOnInit() {
        this.company = this.personService.getPerson();
        this.askPayment = new FormGroup({
            askWho: new FormControl(null,
                [
                    Validators.required,
                ]),
            askBIK: new FormControl(null,
                [
                    Validators.required,
                ]),
            askNumber: new FormControl(null,
                [
                    Validators.required,
                ]),
            askNDS: new FormControl(null,
                [
                    Validators.required,
                ]),
            askAmount: new FormControl(null,
                [
                    Validators.required,
                ]),
            askTel: new FormControl(null,
                [Validators.required,
                ]),
            askEmail: new FormControl(null,
                [
                    Validators.required, Validators.email
                ]),
        });
    }

    onSubmit() {
        console.log(this.askPayment);
    }
}
