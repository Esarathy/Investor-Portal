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
    getdesc(){
        return cy.get('.desc')
    }
   getdownloadformat(){
    return cy.get('p > span')
   }
   getfromdate(){
    return cy.get('#mat-input-0')
   }
   gettodate(){
    return cy.get('#mat-input-1')
   }
   getcelltype(){
    return   cy.get('#mat-select-10')
   }
   getstatus(){
    return  cy.get('#mat-select-12')
   }
   getfileformat(){
    return  cy.get('#mat-select-62')
   }
   getdisplayformat(){
    return  cy.get('#mat-select-60')
   }
   getallstatus(){
    return  cy.get('#mat-option-19')
   }
   getpaidstatus(){
    return  cy.get('#mat-option-20')
   }
   getopenstatus(){
    return  cy.get('#mat-option-21')
   }
}
export default Capitalaccount