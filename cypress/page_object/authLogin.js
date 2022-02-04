/// <reference types="cypress" />

class LoginPage {
    get emailInput() {
        return cy.get('#inputEmail')
    }
    get passwordInput() {
        return cy.get('#inputPassword')
    }
    get rememberBox() {
        return cy.get('.iCheck-helper')
    }
    get notRobotBox() {
        return cy.get('#recaptcha-anchor')
    }
    get loginBtn() {
        return cy.get('#login')
    }
    login(email, pass) {
        this.emailInput.clear().type(email);
        this.passwordInput.clear().type(pass);
        this.rememberBox.check();
        this.notRobotBox.check();
        this.loginBtn.click();
    }
}
export const loginPage = new LoginPage();