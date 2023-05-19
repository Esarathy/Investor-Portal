class Capitalaccount {

    getyear() {
        return cy.get('.select-container>mat-select').eq(0)
    }
    getquarter() {
        return cy.get('.select-container>mat-select').eq(1)
    }
    getfileformat() {
        return cy.get('div.select-wrapper')
    }
    getifrs() {
        return cy.get('span.mat-option-text').eq(0)
    }
    getkfw() {
        return cy.get('span.mat-option-text').eq(1)
    }
    getoverview() {
        return cy.get('div.mat-tab-label-content').contains(' Overview ')
    }
    gettransaction() {
        return cy.get('.mat-tab-label-content').contains('Transactions')
    }
    getfromdate() {
        return cy.get('.mat-button-wrapper>svg').eq(0)
    }
    gettodate() {
        return cy.get('.mat-button-wrapper>svg').eq(1)
    }
    gettransactioncount() {
        return cy.get('.transaction-count')
    }
    getclearbutton() {
        return cy.get('.mat-button-wrapper').contains('Clear Filter')
    }
    gettransactiontype() {
        return cy.get('.transaction-select').eq(0)
    }
    gettransactionstatus() {
        return cy.get('.transaction-select').eq(1)
    }
    getcapitalcall() {
        return cy.get('span.mat-option-text').contains(' Capital call ')
    }
    getcapitaldistribution() {
        return cy.get('span.mat-option-text').contains(' Capital distribution ')
    }
    getpaidstatus() {
        return cy.get('span.mat-option-text').contains(' Paid ')
    }
    getopenstatus() {
        return cy.get('span.mat-option-text').contains(' Open ')
    }
    getdatepicker() {
        return cy.get('.mat-calendar-period-button')
    }
    getyearmonthdate() {
        return cy.get('button.mat-calendar-body-cell')
    }
    getnorecordfound(){
        return cy.get('div.noRecord')
    }








    getdropdown() {
        return cy.get('#mat-select-value-9')
    }
    getoptions() {
        return cy.get('mat-option > span')
    }
    gettableheader() {
        return cy.get('th > span')
    }
    getchidlmenu() {
        return cy.get('.childMenuItem')
    }
    getdownloadlink() {
        return cy.get('.desc > span')
    }

    gettitle() {
        return cy.get('.title')
    }

    getcelltype() {
        return cy.get('#mat-select-10')
    }
    getstatus() {
        return cy.get('#mat-select-12')
    }

    getdisplayformat() {
        return cy.get('#mat-select-14')
    }
    getallstatus() {
        return cy.get('#mat-option-19')
    }
    getlistbox() {
        return cy.get('div[role="listbox"]')
    }

}
export default Capitalaccount