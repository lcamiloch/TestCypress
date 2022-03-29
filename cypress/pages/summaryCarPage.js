import summaryCarLocators from '../locators/summaryCarLocators';
import homeLocators from '../locators/homeLocators';

class summaryCarPage{
    
    checkSummaryCarPage = () => {
        summaryCarLocators.elements.labelCompany().contains('Charles-Alvarez')
    }

    clickOnRentButton = () => {
        homeLocators.elements.buttonSearch().click();
    }
}
export default new summaryCarPage();