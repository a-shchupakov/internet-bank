import {Component} from '@angular/core';
import {TokenService} from './shared/token.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private token: TokenService, private router: Router) {}

    isAuth() {
        return this.token.isAuth();
    }

    logOut() {
        this.token.logOut();
        this.router.navigate(['/']);
    }
}
