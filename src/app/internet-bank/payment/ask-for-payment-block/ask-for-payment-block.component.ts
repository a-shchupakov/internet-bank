import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../http.service';
import {CompanyService} from '../../../company.service';
import {Company} from '../../company/company-header/company.model';
import {AskModel} from '../../../shared/ask.model';
import {ValidationService} from '../../../shared/validation.service';
import {MyMaskUtil} from '../../../shared/my-mask.util';
import {FormStorageService} from '../../../shared/form-storage.service';
import {sa} from '@angular/core/src/render3';

@Component({
  selector: 'app-ask-for-payment-block',
  templateUrl: './ask-for-payment-block.component.html',
  styleUrls: ['../payment.component.css', './ask-for-payment-block.component.css']
})
export class AskForPaymentBlockComponent implements OnInit {
    phoneMask = MyMaskUtil.PHONE_MASK_GENERATOR;
    company: Company;
    askPayment: FormGroup;

    constructor(
        private personService: CompanyService,
        private server: HttpService,
        private validation: ValidationService,
        private formStorage: FormStorageService) { }

    ngOnInit() {
        this.company = this.personService.getPerson();
        this.initForm();
    }

    initForm() {
        const savedForm = this.formStorage.getAskPayment();
        if (savedForm) {
            this.askPayment = savedForm;
            return;
        }
        this.askPayment = new FormGroup({
            askWho: new FormControl('3333444400',
                [
                    Validators.required,
                ], [
                    this.validation.validateINN.bind(this)
                ]),
            askBIK: new FormControl('123456789',
                [
                    Validators.required,
                ], [
                    this.validation.validateBIK.bind(this)
                ]),
            askNumber: new FormControl('99223344556677112233',
                [
                    Validators.required,
                ], [
                    this.validation.validateAccNumber.bind(this)
                ]),
            askNDS: new FormControl('бла бла бла НДС 18%',
                [
                    Validators.required,
                ], [
                    this.validation.validateNDS.bind(this)
                ]),
            askAmount: new FormControl(12000,
                [
                    Validators.required,
                ], [
                    this.validation.validateAmount.bind(this)
                ]),
            askTel: new FormControl('',
                [Validators.required,
                ], [
                    this.validation.validateTelNumber.bind(this)
                ]),
            askEmail: new FormControl('email@domen.com',
                [
                    Validators.required, Validators.email
                ], [
                    this.validation.validateEmail.bind(this)
                ]),
        });
        this.formStorage.setAskPayment(this.askPayment);
    }

    onSubmit() {
        const inn = this.askPayment.get('askWho').value;
        const bik = this.askPayment.get('askBIK').value;
        const number = this.askPayment.get('askNumber').value;
        const nds = this.askPayment.get('askNDS').value;
        const amount = this.askPayment.get('askAmount').value;
        let phone = this.askPayment.get('askTel').value;
        const email = this.askPayment.get('askEmail').value;

        phone = (phone as string).replace(/(\(|\)|\s|\+|-)/g, '');

        const askPayment = new AskModel(inn, bik, number, nds, amount, email, phone, '');
        this.server.createAskPayment(askPayment).subscribe();
    }
}
