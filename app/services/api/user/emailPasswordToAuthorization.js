import base64url from 'base64-url';

export default function emailPasswordToAuthorization(email, password) {
    return base64url.encode(email + ':' + password);
}