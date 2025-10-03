describe('custom-command arrange-act-assert', () => {
	beforeEach(function () {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.fixture('user_information.json').as('userData')
		cy.get('#btn-make-appointment').click()
	})

	it('Testcase1-Verify login pass with valid user', function () {
		cy.login(this.userData.validUsername, this.userData.validPassword)
		cy.url().should('include', '#appointment')
	})

	it('Testcase2-Verify login fail with invalid password', function () {
		cy.login(this.userData.validUsername, this.userData.invalidPassword)
		cy.get('.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})

	it('Testcase3-Verify login fail with invalid username', function () {
		cy.login(this.userData.invalidUsername, this.userData.validPassword)
		cy.get('.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
