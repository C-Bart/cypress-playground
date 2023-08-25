describe('Screenshoots', () => {

    // Full page screenshoot
    it('Should capture full page', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.screenshot({ capture: 'fullPage' })
    })

    // Element screenshoot
    it('Should capture element screenshoot', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains('Sign In').screenshot()
    })
})