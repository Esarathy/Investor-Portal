
class Documents{
getpdffile(){
   return cy.get('mat-selection-list')
}
getsubfolderlist(){
    return cy.get('.folderList > div ')
}
getfolder(){
    return cy.get('div>.folderStructure')
}
}
export default Documents