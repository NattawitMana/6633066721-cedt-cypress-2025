describe('custom-command arrange-act-assert', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()
	})
	it('Testcase1-Verify login pass with valid user', () => {
		//Arrange
		cy.login('John Doe', 'ThisIsNotAPassword')
		//Assert
		cy.url().should('include', '#appointment')
	})

	it('Testcase2-Verify login fail with invalid password', () => {
		//Arrange
		cy.login('John Doe', 'failedPassword')
		//Assert
		cy.get('.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})

	it('Testcase3-Verify login fail with invalid username', () => {
		//Arrange
		cy.login('Invalid Username', 'ThisIsNotAPassword')
		//Assert
		cy.get('.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
