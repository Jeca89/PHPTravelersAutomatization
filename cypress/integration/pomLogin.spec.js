/// <reference types="cypress" />

import { header} from '../page_object/authHeader';
import { loginPage} from '../page_object/authLogin';
const faker = require("faker")

describe('POM login', () => {

    let validEmail = 'jelena.marko2013@gmail.com';
    let validPassword = 'brankopetra1518';

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.datatype.number()
    }

    before('visit app', () => {
        cy.visit('/');
    });

    it('Login with valid credentials', () => {

        header.loginBtn.click();

       loginPage.login(validEmail, validPassword);


});
})
