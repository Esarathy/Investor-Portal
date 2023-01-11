class Leftpanel
{
    getdashboard()
    {
    return cy.get('img[src="../../assets/home.svg"]')
    }
    getinsight()
    {
    return cy.get('img[src="../../assets/insights.svg"]')
    }
    getcapitalaccount()
    {
        return cy.get('img[src="../../assets/format_list_bulleted.svg"]')
    }
    getreports()
    {
        return cy.get('img[src="../../assets/summarize_black.svg"]')
    }
    getdocuments()
    {
        return cy.get('img[src="../../assets/picture_as_pdf_black.svg"]')
    }
    getsettings()
    {
        return cy.get('img[src="../../../../assets/settings_nav.svg"]')
    }
    getlogout()
    {
        return cy.get('img[src="../../../../assets/power_rounded.svg"]')
    }
    getpatnerlogo()
    {
        return  cy.get('.mat-toolbar > img')
    }
    getmenuheading(){
        return cy.get('span.menuHeading')
    }
    gettransaction(){
        return  cy.get('#mat-tab-label-0-1')
    }
    getannual(){
        return cy.get('#mat-tab-label-0-1')
     }
     getinvestor() {
        return cy.get('#mat-tab-label-0-1')
    }
    getportfolio(){
        return cy.get('#mat-tab-label-0-1')
    }
}
export default Leftpanel