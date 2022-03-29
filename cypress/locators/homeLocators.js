class homeLocators{

    elements = {
        listCountry: () => cy.get('#country'),
        listCity: () => cy.get('#city'),
        inputModel: () => cy.get('#model'),
        inputStartDate: () => cy.get('#pickup'),
        inputEndDate: () => cy.get('#dropoff'),
        buttonSearch: () => cy.get('.btn'),
        labelIncorrectDates: () => cy.get('.alert'),
        labelResult: () => cy.get('thead > tr > :nth-child(2)'),
        buttonRent: () => cy.get(':nth-child(1) > :nth-child(7) > .btn')
    }
}

export default new homeLocators();