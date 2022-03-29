import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homePage';
import summaryCarPage from '../../pages/summaryCarPage';
import userDataPage from '../../pages/userDataPage';

Given('the Customer is on the car rental site', () => {
    cy.visit('/');
});

When(/^he to enters the data country "(.*?)" city "(.*?)" model "(.*?)"$/, (country, city, model) => {
    homePage.selectCountry(country);
    homePage.selectCity(city);
    homePage.setModel(model);
});

And(/^he to enters the dates "(.*?)" "(.*?)"$/, (startDate, endDate) => {
    homePage.setStartDate(startDate);
    homePage.setEndDate(endDate);
    homePage.clickOnSearchButton();
});

And('he selects a car', () => {
    homePage.selectCar();
})

And('he enter his data', () => {
    homePage.clickOnSearchButton();
    userDataPage.setUserData();
    homePage.clickOnSearchButton();
})

Then('he should see available cars', () => {
    homePage.checkSearchResult();
});

Then('he should see an error message', () => {
    homePage.checkIncorrectResult();
});

Then('he should see his car\'s selection summary',() => {
    summaryCarPage.checkSummaryCarPage();
})

Then('he should see the data entered',() => {
    cy.log(' >>>> ! Page not working ! <<<<');
})