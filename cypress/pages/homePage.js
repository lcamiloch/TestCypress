import homeLocators from '../locators/homeLocators'

class homePage{
    
    selectCountry = (country) => {
        homeLocators.elements.listCountry().select(country);        
    }

    selectCity = (city) => {
        homeLocators.elements.listCity().select(city);
    }

    setModel = (model) => {
        homeLocators.elements.inputModel().type(model);  
    }

    setStartDate = (startDate) => {
        homeLocators.elements.inputStartDate().type(startDate);
    }

    setEndDate = (endDate) => {
        homeLocators.elements.inputEndDate().type(endDate);
    }

    clickOnSearchButton = () => {
        homeLocators.elements.buttonSearch().click();
    }

    selectCar = () => {
        homeLocators.elements.buttonRent().click();
    }

    checkSearchResult = () => {
        expect(homeLocators.elements.labelResult).to.exist;
    }

    checkIncorrectResult = () => {
        expect(homeLocators.elements.labelIncorrectDates).to.not.equal("Please enter a valid date!");
    }
}
export default new homePage();