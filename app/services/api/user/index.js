import config from '../config';
import axios from 'axios';

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
}