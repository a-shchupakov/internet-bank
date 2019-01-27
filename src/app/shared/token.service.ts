export class TokenService {
    private token = '';
    getToken() {
        return this.token;
    }

    setToken(value: string) {
        this.token = value;
        console.log('Token: ' + value);
    }

    isAuth() {
        return this.token !== '';
    }

    logOut() {
        this.setToken('');
    }
}
