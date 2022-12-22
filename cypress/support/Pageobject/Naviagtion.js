class Navigation
{
    getdashboard()
    {
    return cy.get('.navList').contains('Dashboard')
    }
    getinsight()
    {
    return cy.get('.navList').contains('Insights')
    }
    getcapitalaccount()
    {
        return cy.get('.navList').contains('Capital Account')
    }
    getreports()
    {
        return cy.get('.navList').contains('Reports')
    }
    getdocuments()
    {
        return cy.get('.navList').contains('Documents')
    }
    getsettings()
    {
        return cy.get('.navList2').contains('Settings')
    }
    getlogout()
    {
        return cy.get('.navList2').contains('Logout')
    }
    getpatnerlogo()
    {
        return  cy.get('.mat-toolbar > img')
    }
}
export default Navigation