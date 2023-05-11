class Insightpage {
    getwidgetcontent() {
        return cy.get('div > p')
    }
    getwidgetheading() {
        return cy.get('span>div.insights-title')
    }
    getchartheading() {
        return cy.get('div.cardHead')
    }
    getkpis() {
        return cy.get('div>p.title')
    }
}
export default Insightpage