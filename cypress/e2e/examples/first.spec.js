describe('First test', () => {

    it('Should visit the main page', () => {
        cy.visit('')
    })

    it('Should check correct url', () => {
        cy.url().should('include', 'magento')
    })

    it('Should check main content', () => {
        cy.get('#maincontent').should('be.visible')
    })

    it('Should check the property', () => {
        cy.get('[name="form_key"]').its('defaultChecked').should('be.false')
    })
})