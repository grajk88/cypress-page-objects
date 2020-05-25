/// <reference types="cypress" />


class BasePage {

    launchApplication(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    }

    logOutFromApplication(){
        cy.contains('Log Out').click()
    }

}

export default BasePage