class Capitalaccount {
    getoverview() {
        return cy.get('#mat-tab-label-0-0')
    }
    gettransaction() {
        return cy.get('#mat-tab-label-0-1')
    }

    getfromquater() {
        return cy.get('.mat-select.dropdown:nth-child(1)')
    }
    gettoquater() {
        return cy.get('.mat-select.dropdown:nth-child(2)')
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
    gettransactioncount() {
        return cy.get('.transaction-count')
    }
    gettitle() {
        return cy.get('.title')
    }
    getfromdate() {
        return cy.get('#mat-input-0')
    }
    gettodate() {
        return cy.get('#mat-input-1')
    }
    getcelltype() {
        return cy.get('#mat-select-10')
    }
    getstatus() {
        return cy.get('#mat-select-12')
    }
    getfileformat() {
        return cy.get('#mat-select-16')
    }
    getdisplayformat() {
        return cy.get('#mat-select-14')
    }
    getallstatus() {
        return cy.get('#mat-option-19')
    }
    getpaidstatus() {
        return cy.get('#mat-option-20')
    }
    getopenstatus() {
        return cy.get('#mat-option-21')
    }
    getlistbox(){
        return cy.get('div[role="listbox"]')
    }
    getcapitalcall(){
        return cy.get('#mat-option-17')
    }
    getdistribution(){
       return cy.get('#mat-option-18')
    }
}
export default Capitalaccount