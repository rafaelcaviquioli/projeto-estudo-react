import axios from 'axios';
import config from '../config';
import TokenService from '../../../components/security/token-service';

export default class User {
    login(authorization) {
        const url = `${config.host}/auth`;
        const headers = {
            'headers': {
                'Authorization': `Basic ${authorization}`,
                'codcliPensador': '1322'
            }
        };

        return axios.get(url, headers);
    }

    getUser() {
        const tokenService = new TokenService();
        const url = `${config.host}/portal/colaborador/dados-colaborador`;

        const headers = {
            'headers': {
                'X-Token': tokenService.getToken()
            }
        };

        return axios.get(url, headers);
    }
}