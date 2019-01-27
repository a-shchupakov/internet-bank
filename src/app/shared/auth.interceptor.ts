import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TokenService} from './token.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.token.getToken();
        return next.handle(req.clone({ headers: req.headers.append('Authorization', token) }));
    }
}
