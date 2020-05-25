/// <reference types="cypress" />

import LoginPage from "../../page_objects/LoginPage"
import BillPaymentsPage from "../../page_objects/BillPaymentsPage"
import BasePage from "../../page_objects/BasePage"

const loginPage = new LoginPage
const billPaymentsPage = new BillPaymentsPage
const basePage = new BasePage

describe("Bill Payment Test",()=>{

    it("Pay a Bill",()=>{
        loginPage.login()
        billPaymentsPage.enterPayeeDetailsAndPay()
        basePage.logOutFromApplication()
    })
})