import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidationService {
    constructor(private server: HttpService) {}

    validateTrue(control: AbstractControl) {
        return this.server.validate();
    }
}
