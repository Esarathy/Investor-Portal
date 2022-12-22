class Capitalaccount {
    getoverview(){
        return  cy.get('#mat-tab-label-0-0')
    }
    gettransaction(){
        return  cy.get('#mat-tab-label-0-1')
    }
    
    getfromquater() {
        return cy.get('#mat-select-value-5')
    }
    gettoquater() {
        return cy.get('#mat-select-value-7')
    }
    getdropdown() {
        return cy.get('#mat-select-value-9')
    }
    getoptions() {
       return cy.get('mat-option > span')
    }
    gettableheader(){
        return cy.get('th > span')
    }
    getchidlmenu(){
       return cy.get('.childMenuItem')
    }
   
}
export default Capitalaccount