import {LOCATORS} from "./bankingLocators";
import {BANKING_PAGES} from "./bankingPages";

export const loginUser = (userName) => {
    cy.visit(BANKING_PAGES.LOGIN_PAGE);
    cy.get(LOCATORS.CUSTOMER_LOGIN_BUTTON).click();
    cy.get(LOCATORS.USER_SELECT_DROPDOWN).select(userName);
    cy.get(LOCATORS.LOGIN_BUTTON).click();
}

export const makeDeposit = (amount) => {
    cy.get(LOCATORS.DEPOSIT_SECTION_BUTTON)
        .should('be.visible')
        .click()
        .then(() => {
            cy.get(LOCATORS.AMOUNT_INPUT).should('be.visible').type(amount)
                .then(() => {
                    cy.get(LOCATORS.DEPOSIT_CONFIRM_BUTTON, {timeout: 10000})
                        .should('be.visible').click();
                })
                .then(() => {
                    cy.get(LOCATORS.CONFIRMATION_MESSAGE)
                        .should('be.visible')
                        .should('contain', 'Deposit Successful');
                });
        })
}