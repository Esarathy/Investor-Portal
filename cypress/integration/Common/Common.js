import Capitalaccount from "../../support/Pageobject/Capitalaccountpage"


const capitalaccount = new Capitalaccount



class Common {
    setdate(year, month, date) {
        capitalaccount.getdatepicker().click()
        capitalaccount.getyearmonthdate().contains(year).click()
        capitalaccount.getyearmonthdate().contains(month).click()
        capitalaccount.getyearmonthdate().contains(date).click()
    }

}


export default Common