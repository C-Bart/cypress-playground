/// <reference types="cypress" />

describe('Example test suite to demonstrate how Cypress works', () => {
	// we can use also 'context' key word instead of 'describe', example below

	beforeEach('Execute before every test', () => {})

	afterEach('Exectue after every test', () => {})

	it('True should be true', () => {
		expect(true).to.equal(true)
	})

	describe('Example of nested describe', () => {
		// describes can be nested

		it('False should be false', () => {
			expect(false).to.equal(false)
		})
	})

	it.skip('Locators using with Cypress', () => {
		// we use jQuery engine selectors in Cypress, skipped

		// by tag name
		cy.get('input')

		// by id
		cy.get('#id')

		// by class name (all elements contained that class)
		cy.get('.class-name')

		// by attribute name
		cy.get('[placeholder]')

		// by attribute value
		cy.get('[placeholder="some text"]')

		// by tag name and attribute with value
		cy.get('input[placeholder="some text"]')

		// by two different attributes
		cy.get('[placeholder="some text"][fullwidth]')

		// by tag name, attribute with value, id and class name
		cy.get('input[plaholder="email"]#inputEmail.input-full-width')

		// by the most recommended way by Cypress, creating dedicated attribute
		cy.get('[data-cy="inputEmail"]')
	})
})

context('Example test suite with using context key word', () => {
	it('5 should be 5', () => {
		expect(5).to.equal(5)
	})
})
