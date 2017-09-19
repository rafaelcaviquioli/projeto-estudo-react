import jwt_decode from 'jwt-decode';

export default class TokenService {
    constructor() {
        this.tokenName = 'token';
    }

    setToken(token) {
        localStorage.setItem(this.tokenName, token);
    }

    removeToken() {
        localStorage.removeItem(this.tokenName);
    }

    getToken() {
        return localStorage.getItem(this.tokenName);
    }
    isNullOfEmpty() {
        return this.getToken() === '' || this.getToken() === null;
    }
    getData() {
        return jwt_decode(this.getToken());
    }
}
