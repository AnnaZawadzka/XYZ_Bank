export const LOCATORS = {
    //Home Page
    CUSTOMER_LOGIN_BUTTON:'button[ng-click="customer()"]',

    //Customer Login Page
    USER_SELECT_DROPDOWN: 'select#userSelect',
    LOGIN_BUTTON: 'form[ng-submit="showAccount()"] button[type="submit"]',

    //Deposit Page
    DEPOSIT_SECTION_BUTTON: 'button[ng-click="deposit()"]',
    AMOUNT_INPUT: 'input[ng-model="amount"]',
    DEPOSIT_CONFIRM_BUTTON: 'form[ng-submit="deposit()"] button[type="submit"]',
    CONFIRMATION_MESSAGE: '.error',
    BALANCE_LABEL: 'div.center:contains("Balance")',
    TRANSACTIONS_BUTTON: 'button[ng-click="transactions()"]',

    //Amount Page
   // AMOUNT_COLUMNS: '.table tbody td:nth-child(2)',
    AMOUNT_COLUMNS: 'tr[id*="anchor"] td:nth-child(2)',
};
