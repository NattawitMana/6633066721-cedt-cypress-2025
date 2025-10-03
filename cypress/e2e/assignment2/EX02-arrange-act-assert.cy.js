describe('arrange-act-assert', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()
	})
	it('Testcase1-Verify login pass with valid user', () => {
		//Arrange
		cy.get('#txt-username').type('John Doe')
		cy.get('#txt-password').type('ThisIsNotAPassword')
		//Act
		cy.get('#btn-login').click()
		//Assert
		cy.url().should('include', '#appointment')
	})

	it('Testcase2-Verify login fail with invalid password', () => {
		//Arrange
		cy.get('#txt-username').type('John Doe')
		cy.get('#txt-password').type('ThisIsAPassword')
		//Act
		cy.get('#btn-login').click()
		//Assert
		cy.get('.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})

	it('Testcase3-Verify login fail with invalid username', () => {
		//Arrange
		cy.get('#txt-username').type('John')
		cy.get('#txt-password').type('ThisIsNotAPassword')
		//Act
		cy.get('#btn-login').click()
		//Assert
		cy.get('.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
