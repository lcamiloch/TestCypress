class summaryLocator{

    elements = {
        labelCompany: () => cy.get('.card-title')
    }
}

export default new summaryLocator();