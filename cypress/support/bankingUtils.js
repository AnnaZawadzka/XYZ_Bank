import {LOCATORS} from "./bankingLocators";
import {BANKING_PAGES} from "./bankingPages";

export const loginUser = (userName) => {
    cy.visit(BANKING_PAGES.LOGIN_PAGE);
    cy.get(LOCATORS.CUSTOMER_LOGIN_BUTTON).click();
    cy.get(LOCATORS.USER_SELECT_DROPDOWN).select(userName);
    cy.get(LOCATORS.LOGIN_BUTTON).click();
}

export const makeDeposit  = (amount) => {
    cy.get(LOCATORS.DEPOSIT_SECTION_BUTTON).click();
    cy.get(LOCATORS.AMOUNT_INPUT).type(amount);
    cy.get(LOCATORS.DEPOSIT_CONFIRM_BUTTON).click();
    cy.get(LOCATORS.CONFIRMATION_MESSAGE).should('contain', 'Deposit Successful');
}