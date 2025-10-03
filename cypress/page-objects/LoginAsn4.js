const Page = require('./Page')

class LoginAsn4 extends Page {
	static txtUsernameField = '#user_login'
	static txtPasswordField = '#user_password'
	static btnSignIn = 'input[name="submit"]'
	static msgAlert = '.alert-error'

	static inputLoginForm(username, password) {
		cy.get(this.txtUsernameField).type(username)
		cy.get(this.txtPasswordField).type(password)
		cy.get(this.btnSignIn).click()
	}

	static canDisplayAlert(msg) {
		cy.get(this.msgAlert).should('contain.text', msg)
	}
}

module.exports = LoginAsn4
