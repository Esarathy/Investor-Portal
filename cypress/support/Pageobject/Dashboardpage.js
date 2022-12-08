class Dashboard
{
getjoinfond()
{
    return cy.get('#mat-select-0')
}
getmenuheading()
{
    return cy.get('.menuHeading')
}
getinvestor()
{
    return cy.get('#mat-select-2 > div')
}
getprofileicon()
{
    return cy.get('.profile > div > .ng-star-inserted').click()
}
getoverlay()
{
    return cy.get('.cdk-overlay-backdrop')
}
getoptiontext()
{
    return cy.get('span[class="mat-option-text"]')
}
}
export default Dashboard