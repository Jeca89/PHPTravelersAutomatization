/// <reference types="cypress" />

class RegistrationPage {
    get inputFirstName() {
        return cy.get('#inputFirstName')
    }
    get inputLastName() {
        return cy.get('#inputLastName')
    }
    get inputEmail() {
        return cy.get("#inputEmail")
    }
    get inputPhoneDropdown() {
        return cy.get('.iti-arrow')
    }
    get inputPhone() {
        return cy.get('#inputPhone')
    }
    get companyName() {
        return cy.get('#inputCompanyName')
    }
    get streetAdress() {
        return cy.get('#inputAdress1')
    }
    get secondStreetAdress() {
        return cy.get('#inputAdress2')
    }
    get cityName() {
        return cy.get('#inputCity')
    }
    get stateName() {
        return cy.get('#stateinput')
    }
    get postcode() {
        return cy.get('#inputPostcode')
    }
    get countryName() {
        return cy.get('#inputCountry')
    }
    get mobileNumber() {
        return cy.get('#customfield2')
    }
    get inputPassword() {
        return cy.get('#inputNewPassword1')
    }
    get confirmPass() {
        return cy.get('#inputNewPassword2')
    }
    get generatePassBtn() {
        return cy.get('.generate_password')
    }
    get recieveEmail() {
        return cy.get('.switch')
    }
    get notRobotBtn() {
        return cy.get('.recaptcha-checkbox')
    }
    get registerBtn() {
        return cy.get('.btn-lg')
    }

    registration(name, lastName, email, phone, adress, city, country, mobile, pass, passConf) {
        this.inputFirsName.clear().type(name);
        this.inputLastName.clear().type(lastName);
        this.inputEmail.clear().type(email);
        this.inputPhoneDropdown.click().select();
        this.inputPhone.clear().type(phone);
        this.streetAdress.clear().type(adress);
        this.cityName.clear().type(city);
        this.countryName.clear().type(country);
        this.mobileNumber.clear().type(mobile);
        this.inputPassword.clear().type(pass);
        this.confirmPass.clear().type(passConf);
        this.notRobotBtn.check();
        this.registrationBtn.click();
    }
}

export const registrationPage = new RegistrationPage();
