/// <reference types  = "Cypress" />
import dayjs from "dayjs";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Apiurl from "../../../../fixtures/Apiurl.json";
import Credential from "../../../../fixtures/Credential.json";
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Common from "../../../Common/Common";
const common = new Common;
const loginpage = new Loginpage();
const dashboard = new Dashboard();
const leftpanel = new Leftpanel();
let resbody = "";

// Login
Given("The user lands on the authentication page", () => {
  cy.visit('/');
});

When("User enter the user name or mailid and password", () => {
  loginpage.getusername().type(Credential.Test.username);
  loginpage.getpassword().type(Credential.Test.password);
});

And("Clicks on the sign in button", () => {
  loginpage.getsignin().click();
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Then("Verify user should be successfully navigated to home page", () => {
  cy.url().should("include", "/dashboard");
});


//dashboard 
When("The user hits the api request for the base data", () => {
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
    resbody = response;
  });
});

When("User selects the Investor from LPS drop-down", () => {
  dashboard.getinvestordropdown().click()
  cy.contains(Investorandfund.lps).click({ force: true });
});

And("User selects the fund from vehicle drop-down", () => {
  dashboard.getfunddropdown().click()
  cy.contains(Investorandfund.vehicle).click({ force: true });
});

Then("Verify partner logo is displayed on the left panel", (response) => {
  leftpanel
    .getpatnerlogo()
    .should("have.attr", "src")
    .and("include", resbody.body.data.gps[0].logos.bigUrl);
});


// Timeline Widget
When("The user hits the api request for the dashboard", () => {
  const token = localStorage.getItem("access_token");
  const authorization = `Bearer ${token}`;
  cy.request({
    method: "GET",
    url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'dashboard'),
    headers: {
      authorization,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    resbody = response;
  });

});

Then("Verify timeline widget is displayed", () => {
  dashboard.gettimeline().should("be.visible");
});

And("Verify the investment start date in the timeline", () => {
  dashboard
    .getinvetsmentstartdate()
    .should("have.text", dayjs(resbody.body.data.timeline.startInvestmentDate, "DD. MMMYYYY").format("DD. MMMYYYY"));
});

And("Verify the liquidation end date in the timeline", () => {
  dashboard
    .getliquidationenddate()
    .should("have.text", dayjs(resbody.body.data.timeline.endDate, "DD. MMMYYYY").format("DD. MMMYYYY"));
});

When("User hover on the events in the timeline", () => {
  dashboard.gettimelinedot().should('be.visible').eq(1).click()
});

Then("A tooltip should be visible", () => {
  dashboard.gettooltip().should("be.visible");
});


// Banner Widget
And("Banner Widget is displayed", () => {
  dashboard.getbanner().should("be.visible");
});

When("User click on the banner widget it redirected to a respective url", () => {
  dashboard.getbanner().invoke("removeAttr", "target").click();
  cy.origin(resbody.body.data.banner.href, () => {
    cy.url().should('include', origin)
  });
}
);


// Investment Widget
And("Investment Widget is displayed", () => {
  const totalinvest =
    resbody.body.data.investments.realizedInvestments +
    resbody.body.data.investments.unrealizedInvestments;
  dashboard
    .getinvestmentheader()
    .should("have.text", " " + totalinvest + " Investments ");
});

Then("Verify the investment widgets and their respective graphs", () => {
  dashboard
    .getinvestmentkpis()
    .should(
      "have.text",
      " " +
      resbody.body.data.investments.realizedInvestments +
      " realized " +
      " " +
      resbody.body.data.investments.unrealizedInvestments +
      " unrealized "
    );
});


// Performance Widget
And("Performance Widget is displayed", () => {
  dashboard.getperformance().should("be.visible");
});
Then("Details on the Performance widget are verified", () => {
  dashboard.getperformancekpis()
    .find(".count")
    .should(
      "have.text",
      (resbody.body.data.performance.tvpi).toFixed(2) +
      "" +
      (resbody.body.data.performance.dpi) +
      "" +
      (resbody.body.data.performance.rvpi).toFixed(2) +
      "" +
      (resbody.body.data.performance.moic).toFixed(2) +
      "x" +
      (resbody.body.data.performance.irr).toFixed(2) +
      "%"
    );
});


// navigate to insight on clicking see details
When("Clicking on the see details link from the performance widget", () => {
  dashboard.getseedetails().eq(0).click();
});

Then("User should navigate to the Insights page successfully", () => {
  cy.url().should("include", "/insights");
  leftpanel.getmenuheading().should("contain", "/ Insights ");
});


// Capital account
And("Capital account Widget is displayed", () => {
  dashboard.getcapitalinusd().should("be.visible");
});

Then("Details on the capital account widget are verified", () => {
  dashboard.getcapitalkpis()
    .find(".count")
    .should(
      'have.text',
      (resbody.body.data.capital.committed).toLocaleString() +
      "" +
      (resbody.body.data.capital.calledIn).toLocaleString() +
      "" +
      (resbody.body.data.capital.distributed).toLocaleString() +
      "" +
      (resbody.body.data.capital.contributed).toLocaleString() +
      "" +
      (resbody.body.data.capital.deployed).toLocaleString() +
      "" +
      (resbody.body.data.capital.duePayments).toLocaleString()
    );
});


// navigate capital account on clicking see details
When("Clicking on the see details link from the capital account widgets", () => {
  dashboard.getseedetails().eq(1).click();
}
);

Then("User should navigate to the capital account page successfully", () => {
  cy.url().should("include", "/capital-account");
  dashboard.getmenuheading().should("contain", "/ Capital Account ");
});


// Upcoming events Widgets
let eventlist;
When("The user hits the api request for the upcoming events", () => {
  const token = localStorage.getItem("access_token");
  const authorization = `Bearer ${token}`;
  cy.request({
    method: "GET",
    url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'events'),
    headers: {
      authorization,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    resbody = response;
  });
});
Then("Upcoming event widget is displayed", () => {
  dashboard.getupcommingevents().should("be.visible");
});

And("Should contain the list of events", () => {
  eventlist = dashboard.geteventslist().should("have.length", resbody.body.data.length);
});

When("User click on any of the events", () => {
  eventlist.then(($events) => {
    if ($events != 0 || undefined) {
      dashboard.getnorecordfound().should('contain', ' No upcoming events. ')
    } else {
      dashboard.geteventslist().eq(0).click();
    }
  })
});

Then("Verify the event is getting downloaded", () => {

});



// News Widgets
When("The user hits the api request for the news", () => {
  const token = localStorage.getItem("access_token");
  const authorization = `Bearer ${token}`;
  cy.request({
    method: "GET",
    url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'news'),
    headers: {
      authorization,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    resbody = response;
  });
});
Then("News widget is displayed", () => {
  dashboard.getnews().should("be.visible");
});

And("Should contain the list of news", () => {
  dashboard.getnewslist().should("have.length", resbody.body.data.length);
});

When("User clicks on any of the news", () => {
  dashboard.getnewslist().then(($news) => {
    if ($news.length >= 1) {
      dashboard.getnewslist().eq(0).click();
    }
  });
});

Then("Verify user navigates to the external url", () => {

});



// Updates
let updateslist;
When("The user hits the api request for the updates", () => {
  const token = localStorage.getItem("access_token");
  const authorization = `Bearer ${token}`;
  cy.request({
    method: "GET",
    url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'updates'),
    headers: {
      authorization,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    resbody = response;
  });
});

And("Updates widget is verified", () => {
  dashboard.getupdates().should("be.visible");
});

When("User click on last login", () => {
  cy.log("click last login");
});

Then("Should contain list of updates for last login", () => {
  updateslist = dashboard.getupdateslist().should("have.length", resbody.body.data.length);
});

When("User click on last month", () => {
  cy.log("click last month");
});

Then("Should contain list of updates for last month", () => {
  updateslist = dashboard.getupdateslist().should("have.length", resbody.body.data.length);
});

When("User clicks on any of the updates", () => {
  updateslist.then(($updates) => {
    if ($updates == 0 || undefined) {
      dashboard.getnorecordfound().should('contain', ' No updates within the last 30 days. ')
    } else {
      dashboard.getupdateslist().eq(0).click();
    }
  });
});

Then("User should sucessfully navigate to the respective page", () => {

});
