/// <reference types="cypress" />

import { validationMessages} from '../fixtures/validationMessages.json';
import { header} from '../page_object/authHeader';
import { registrationPage } from '../page_object/authRegister';

const faker = require('faker');

describe("POM Registration test", () =>{

    let invalidUserData = {
        emailMissingAtSign: 'jeca_ceca89hotmail.com',
        emailMissingDotCom: 'jeca_ceca89@hotmail',
        emailMissingDot: 'jeca_ceca89@hotmailcom',
        email2Dots: 'jeca_ceca89@hotmail..com',
        emailDotBeforeAt: 'jeca_ceca89.@hotmail.com',
        takenEmail: 'jeca_ceca89@hotmail.com'
    }

    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomNewPassword: faker.internet.password(),
        randomShortPassword: faker.internet.password(5),
        randomPhone: faker.internet.randomPhone(),
        randomAdress: faker.internet.randomAdress(),
        randomCity: faker.internet.randomCity(),
        randomContry: faker.internet.randomContry(),
        randomMobile: faker.internet.randomMobile()
    }

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'phptravels')
    });

    it("Register with valid credentials", () => {

        cy.intercept({
            method: 'POST',
            url: 'https://phptravels.org/register.php'
        }).as('register');

        header.signUpButton.click();
        registrationPage.registration(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPhone, userData.randomAdress, userData.randomCity, userData.randomContry, userData.randomMobile, userData.randomPassword, userData.randomPassword);

        cy.wait('@register').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
        });
        header.signUpButton.should('not.exist');
        header.logoutBtn.should('exist');
        cy.url().should('not.contains', "/register")
    });
});
