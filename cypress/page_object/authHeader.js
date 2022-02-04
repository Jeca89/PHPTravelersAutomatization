/// <reference types="cypress" />

class Header {
    get signUpButton() {
        return cy.get('.signup-free')
    }
    get loginBtn() {
        return cy.get('.sign-in')
    }
}

export const header = new Header();