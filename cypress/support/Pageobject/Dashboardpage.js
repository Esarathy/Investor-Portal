class Dashboard
{

gettimeline()
{
    return  cy.get('mat-card').contains(' Timeline ')
}
getperformance()
{
    return  cy.get('mat-card').contains(' Performance ')
}
getcapitalinusd()
{
    return   cy.get('mat-card').contains(' Capital in USD ')
}
getupcommingevents()
{
    return   cy.get('mat-card').contains(' Upcoming events ')
}
getupdates()
{
    return  cy.get('mat-card').contains(' Updates ')
}
getbanner()
{
    return  cy.get('mat-card > a')
}
getprofile(){
    return  cy.get('.profile')
}
getinvestor()
{
    return cy.get('#mat-select-2 > div')
}
getjoinfond()
{
    return cy.get('#mat-select-0')
}
getoptiontext()
{
    return cy.get('span[class="mat-option-text"]')
}
getoptions(){
    return cy.get('div > mat-option')
}
getinvestments(){
    return cy.get('mat-card').contains(' 40% of 15 Investments ')
}
getmenuheading(){
    return cy.get('.menuHeading')
}
}
export default Dashboard