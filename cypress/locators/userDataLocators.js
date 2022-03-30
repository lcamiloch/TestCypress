class userDataLocators{

    elements = {
        userName: () => cy.get('#name'),
        userLastName: () => cy.get('#last_name'),
        cardNumber: () => cy.get('#card_number'),
        email: () => cy.get('#email'),
        labelErrorName: () => cy.get('#rent_form > :nth-child(1)'),
        labelErrorLastName: () => cy.get('#rent_form > :nth-child(2)'),
        labelErrorCardNumber: () => cy.get('#rent_form > :nth-child(3)'),
        labelErrorEmail: () => cy.get('#rent_form > :nth-child(4)')
    }
}

export default new userDataLocators();