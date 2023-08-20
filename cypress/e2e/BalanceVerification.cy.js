import {LOCATORS} from "../support/bankingLocators";
import {loginUser, makeDeposit} from "../support/bankingUtils";

describe('XYZ Bank app', () => {
    before(() => {
        loginUser('Harry Potter');
    });

    it('Should Sum Deposits and Check Balances', () => {
        const deposits = [100, 10, 5];
        const expectedSum = deposits.reduce((acc, val) => acc + val, 0);

        deposits.forEach(makeDeposit);

        cy.get(LOCATORS.BALANCE_LABEL).should('contain', expectedSum.toString());
        cy.get(LOCATORS.TRANSACTIONS_BUTTON).click();

        cy.get(LOCATORS.AMOUNT_COLUMNS, {timeout: 10000}).should('be.visible');

        let sum = 0;
        cy.get(LOCATORS.AMOUNT_COLUMNS)
            .each(($cell) => {
            let value = parseFloat($cell.text().trim());
            if (!isNaN(value)) {
                sum += value;
            }
        }).then(() => {
            expect(sum).to.equal(expectedSum);
        });
    })
})