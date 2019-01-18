import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidationService {
    constructor(private server: HttpService) {}

    validateCardNumber(control: AbstractControl) {
        return this.server.validateCardNumber(control.value);
    }

    validateCardCVC(control: AbstractControl) {
        return this.server.validateCardCVC(control.value);
    }

    validateAmount(control: AbstractControl) {
        return this.server.validateAmount(control.value);
    }

    validateCardExpires(control: AbstractControl) {
        return this.server.validateCardExpires(control.value);
    }

    validateComment(control: AbstractControl) {
        return this.server.validateComment(control.value);
    }

    validateINN(control: AbstractControl) {
        return this.server.validateINN(control.value);
    }

    validateBIK(control: AbstractControl) {
        return this.server.validateBIK(control.value);
    }

    validateNDS(control: AbstractControl) {
        return this.server.validateNDS(control.value);
    }

    validateAccNumber(control: AbstractControl) {
        return this.server.validateAccNumber(control.value);
    }

    validateTelNumber(control: AbstractControl) {
        return this.server.validateTelNumber(control.value);
    }

    validateEmail(control: AbstractControl) {
        return this.server.validateEmail(control.value);
    }
}
