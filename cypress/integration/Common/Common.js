import Capitalaccount from "../../support/Pageobject/Capitalaccountpage"
import Loginpage from "../../support/Pageobject/Loginpage";


const capitalaccount = new Capitalaccount
const loginpage = new Loginpage();


class Common {
  setdate(year, month, date) {
    capitalaccount.getdatepicker().click()
    capitalaccount.getyearmonthdate().contains(year).click()
    capitalaccount.getyearmonthdate().contains(month).click()
    capitalaccount.getyearmonthdate().contains(date).click()
  }
  login(url,username,password) {
    cy.visit(Cypress.env(url));
    loginpage.getusername().type(username);
    loginpage.getpassword().type(password);
    loginpage.getsignin().click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    })
  }
}
export default Common