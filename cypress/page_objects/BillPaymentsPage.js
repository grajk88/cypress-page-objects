/// <reference types="cypress" />

class BillPaymentsPage {

    navigateToBillPaymentsPage(){

        cy.get('#leftPanel > ul > :nth-child(4) > a').click()

    }

    enterPayeeDetailsAndPay(){

        this.navigateToBillPaymentsPage()

        // Locators with Aliases
        cy.get(':nth-child(1) > [width="20%"] > .input').as("firstName")
        cy.get(':nth-child(2) > [width="20%"] > .input').as("address")
        cy.get(':nth-child(3) > [width="20%"] > .input').as("city")
        cy.get(':nth-child(4) > [width="20%"] > .input').as("state")
        cy.get(':nth-child(5) > [width="20%"] > .input').as("zipcode")
        cy.get(':nth-child(6) > [width="20%"] > .input').as("phoneNumber")
        cy.get(':nth-child(8) > :nth-child(2) > .input').as("accountNumber")
        cy.get(':nth-child(9) > [width="20%"] > .input').as("verifyAccountNumber")
        cy.get(':nth-child(11) > [width="20%"] > .input').as("amount")
        cy.get(':nth-child(13) > :nth-child(2) > .input').as('fromAccountNumber')
        cy.get('[ng-show="showResult"] > .title').as('result')

        // Actions
        cy.get('@firstName').type("Automation")
        cy.get('@address').type("London")
        cy.get('@city').type("Greater London")
        cy.get('@state').type("London")
        cy.get('@zipcode').type("EY1 20I")
        cy.get('@phoneNumber').type("0987654321")
        cy.get('@accountNumber').type("12345")
        cy.get('@verifyAccountNumber').type("12345")
        cy.get('@fromAccountNumber').select('13011')
        cy.get('@amount').type("100 {enter}")

        this.validateResults()

    }

    validateResults(){
        
        cy.get('@result').should("have.text","Bill Payment Complete")

    }

}

export default BillPaymentsPage