class Reports{

     getquarterly(){
       return cy.get('#mat-tab-label-0-0')
     }
     getannual(){
        return cy.get('#mat-tab-label-0-1')
     }
     getmenutitle(){
        return cy.get('span > .childMenuItem')
     }
     getyear(){
        return cy.get('.folderStructure')
     }
     getyearandquater()
     {
      return cy.get('.yearAndQuarterDropdown')
     }
     getredocumentlist(){
      return cy.get('.reportsList')
     }
     getoptions()
     {
      return cy.get('mat-option')
     }
}
export default Reports