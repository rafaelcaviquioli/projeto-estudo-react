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

    getAuthorizationHeader() {
        return {
            headers: {
                'X-Token': this.getToken()
            }
        }
    }
}
