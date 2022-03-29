class userDataLocators{

    elements = {
        userName: () => cy.get('#name'),
        userLastName: () => cy.get('#last_name'),
        cardNumber: () => cy.get('#card_number'),
        email: () => cy.get('#email')
    }
}

export default new userDataLocators();