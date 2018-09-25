import { HttpClient } from '@angular/common/http';


import { map } from 'rxjs/operators';

export class AuthService {

    constructor() { }
    login(username: string, password: string) {

        localStorage.setItem('token', username);

    }
    getToken(): string {
        return localStorage.getItem('token');
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

}