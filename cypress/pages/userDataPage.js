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
}

export default new userDataPage();