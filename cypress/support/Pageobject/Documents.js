
class Documents{
getdocuments(){
   return cy.get('mat-selection-list')
}
getsubfolderlist(){
    return cy.get('.folderList > div ')
}
}
export default Documents