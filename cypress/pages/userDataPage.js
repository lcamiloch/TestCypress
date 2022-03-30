import locators from '../locators/userDataLocators'

class userDataPage{

    setUserData = () => {
        cy.fixture('testData.json').then((data)=>{
            locators.elements.userName().type(data.name);
            locators.elements.userLastName().type(data.lasName);
            locators.elements.cardNumber().type(data.cardNumber);
            locators.elements.email().type(data.email);
        })
    }

    checkErrorMessages = () => {
        expect(locators.elements.labelErrorName()).to.exist;
        expect(locators.elements.labelErrorLastName()).to.exist;
        expect(locators.elements.labelErrorCardNumber()).to.exist;
        expect(locators.elements.labelErrorEmail()).to.exist;
    }
}

export default new userDataPage();