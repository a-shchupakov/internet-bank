import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../http.service';
import {CompanyService} from '../../../company.service';
import {Company} from '../../company/company-header/company.model';
import {AskModel} from '../../../shared/ask.model';

@Component({
  selector: 'app-ask-for-payment-block',
  templateUrl: './ask-for-payment-block.component.html',
  styleUrls: ['./ask-for-payment-block.component.css', '../payment.component.css']
})
export class AskForPaymentBlockComponent implements OnInit {
    company: Company;
    askPayment: FormGroup;

    constructor(private personService: CompanyService, private server: HttpService) { }

    ngOnInit() {
        this.company = this.personService.getPerson();
        this.askPayment = new FormGroup({
            askWho: new FormControl('3333444400',
                [
                    Validators.required,
                ]),
            askBIK: new FormControl('123456789',
                [
                    Validators.required,
                ]),
            askNumber: new FormControl('99223344556677112233',
                [
                    Validators.required,
                ]),
            askNDS: new FormControl('бла бла бла НДС 18%',
                [
                    Validators.required,
                ]),
            askAmount: new FormControl(12000,
                [
                    Validators.required,
                ]),
            askTel: new FormControl('89223322990',
                [Validators.required,
                ]),
            askEmail: new FormControl('email@domen.com',
                [
                    Validators.required, Validators.email
                ]),
        });
    }

    onSubmit() { // TODO: ngSubmit is broken
        const inn = this.askPayment.get('askWho').value;
        const bik = this.askPayment.get('askBIK').value;
        const number = this.askPayment.get('askNumber').value;
        const nds = this.askPayment.get('askNDS').value;
        const amount = this.askPayment.get('askAmount').value;
        const phone = this.askPayment.get('askTel').value;
        const email = this.askPayment.get('askEmail').value;

        const ask_payment = new AskModel(inn, bik, number, nds, amount, email, phone, '');
        this.server.createAskPayment(ask_payment).subscribe();
    }
}
