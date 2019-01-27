import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenService} from './token.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private token: TokenService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const canActivate = this.token.isAuth();
        if (!canActivate) {
            this.router.navigate(['/']);
        }

        return canActivate;
    }
}
