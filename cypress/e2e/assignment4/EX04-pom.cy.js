const LoginAsn4 = require('../../page-objects/LoginAsn4')

describe('EX04-pom', () => {
	beforeEach(() => {
		LoginAsn4.navigateToUrl('http://zero.webappsecurity.com/login.html')
		LoginAsn4.canNavigateToUrl('webappsecurity.com/login.html')
	})

	// afterEach(() => {
	// 	LoginAsn4.navigateToUrl('http://zero.webappsecurity.com/index.html')
	// 	cy.get('#logout_link').click()
	// })

	it('Login with valid user', () => {
		LoginAsn4.inputLoginForm('username', 'password')
		LoginAsn4.navigateToUrl('http://zero.webappsecurity.com/index.html')
		LoginAsn4.canNavigateToUrl('webappsecurity.com/index.html')

		cy.get('.dropdown-toggle').should('contain.text', 'username')
	})

	it('Login with invalid user', () => {
		LoginAsn4.inputLoginForm('Invalid Username', 'Invalid Password')
		LoginAsn4.canDisplayAlert('Login and/or password are wrong.')
	})
})
