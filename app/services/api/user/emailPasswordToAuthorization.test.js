import React from 'react';
import jest from 'enzyme';

import emailPasswordToAuthorization from './emailPasswordToAuthorization';

describe('E-mail and password to authorization', () => {

    it('Should convert email and password to authorization token base64', () => {
        const email = 'rafaelcitj@gmail.com';
        const password = '123456';
        const expected = 'cmFmYWVsY2l0akBnbWFpbC5jb206MTIzNDU2';

        expect(emailPasswordToAuthorization(email, password)).toEqual(expected);
    });

});