import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {TokenService} from '../../shared/token.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['../../internet-bank/payment/payment.component.css', './auth.component.css']
})
export class AuthComponent implements OnInit {
    form = new FormGroup({
        login: new FormControl('user', Validators.required),
        password: new FormControl('qwerty', Validators.required)
    });

    failed = false;

    constructor(
        private server: HttpService,
        private token: TokenService,
        private router: Router) {
    }

    ngOnInit() {
    }

    auth() {
        const login = this.form.get('login').value;
        const password = this.form.get('password').value;
        this.server.getToken(login, password).subscribe(value => {
            this.token.setToken(value.token);
            this.router.navigate(['/bank']);
        }, error1 => this.failed = true);
    }
}
