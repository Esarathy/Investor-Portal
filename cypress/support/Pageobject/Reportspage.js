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
     getyear()
     {
        return cy.get('.folderStructure')
     }
}
export default Reports