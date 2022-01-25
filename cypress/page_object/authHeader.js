/// <reference types="cypress" />

class Header {
    get signUpButton() {
        return cy.get('.signup-free')
    }
}

export const header = new Header();