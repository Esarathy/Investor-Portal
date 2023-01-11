class Insightpage {
    getwidgetcontent(){
        return cy.get('div > p')
    }
    getwidgetheading(){
        return cy.get('div')
    }
}
export default Insightpage