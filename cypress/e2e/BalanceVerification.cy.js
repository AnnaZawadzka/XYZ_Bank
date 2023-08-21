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

        cy.get(LOCATORS.BALANCE_LABEL, {timeout: 20000})
            .should('be.visible')
            .and('contain', expectedSum.toString());
        cy.wait(2000);
        cy.get(LOCATORS.TRANSACTIONS_BUTTON, {timeout: 20000})
            .should('be.visible')
            .click()
            .then(() => {
                cy.get(LOCATORS.AMOUNT_COLUMNS, {timeout: 20000})
                    .should('be.visible')
                    .then(($cells) => {
                        let sum = 0;
                        $cells.each((index, cell) => {
                            let value = parseFloat(cell.textContent.trim());
                            if (!isNaN(value)) {
                                sum += value;
                            }
                        });
                        expect(sum).to.equal(expectedSum);
                    });
            });
    });
})