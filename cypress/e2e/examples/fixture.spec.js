describe('Login with data from fixture', () => {

    it('Should open the page', () => {
        cy.visit('https://magento.softwaretestingboard.com/?ref=hackernoon.com')

    })

    it('Should click login button', () => {
        cy.contains('Sign In').click()
    })

    it('Should fill the form with data from fixture', () => {
        cy.fixture('user').then((userData) => {
            cy.get('#email').type(userData.email)
            cy.get('#pass').type(userData.password)
        })
    })

})