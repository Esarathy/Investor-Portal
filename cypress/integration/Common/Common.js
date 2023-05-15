import Apiurl from "../../fixtures/Apiurl.json";

let resbody = "";
class Common {
    getresponse() {

        const token = localStorage.getItem("access_token");
        const authorization = `Bearer ${token}`;
        cy.request({
            method: "GET",
            url: Cypress.env("baseurl") + Apiurl.basedata,
            headers: {
                authorization,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            resbody = response

            //  cy.wrap(response).as('resultAllias')
        })

    }

}
export default Common