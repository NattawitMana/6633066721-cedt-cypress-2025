describe('assert-web-elements', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()
		cy.get('#txt-username').type('John Doe')
		cy.get('#txt-password').type('ThisIsNotAPassword')
		cy.get('#btn-login').click()
		cy.url().should('include', '#appointment')
	})

	it('Testcase1 - Verify that make appointment page display “Make Appointment” in h2.', () => {
		cy.get('h2').should('have.text', 'Make Appointment')
	})
	it('Testcase2 - Verify that can select all facility combo boxes', () => {
		cy.get('#combo_facility', { timeout: 30000 }).should('be.visible')
		cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
		cy.get('#combo_facility').should(
			'have.value',
			'Seoul CURA Healthcare Center'
		)
		cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
		cy.get('#combo_facility').should(
			'have.value',
			'Hongkong CURA Healthcare Center'
		)
		cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
		cy.get('#combo_facility').should(
			'have.value',
			'Tokyo CURA Healthcare Center'
		)
	})

	it('Testcase3 - Verify that can select apply for hospital readmission checkbox', () => {
		cy.get('#chk_hospotal_readmission').check()
		cy.get('#chk_hospotal_readmission').should('be.checked')
	})

	it('Testcase4 - Verify that can select health care program radio button', () => {
		cy.get('#radio_program_medicaid').check()
		cy.get('#radio_program_medicaid').should('be.checked')
		cy.get('#radio_program_medicare').check()
		cy.get('#radio_program_medicare').should('be.checked')
		cy.get('#radio_program_none').check()
		cy.get('#radio_program_none').should('be.checked')
	})

	it('Testcase5 - Verify that can input current date on Visit Date', () => {
		const date = new Date()
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
		const currentDate = `${month}/${day}/${year}`
		cy.get('#txt_visit_date').type(currentDate)
		cy.get('#txt_visit_date').should('have.value', currentDate)
	})

	it('Testcase6 - Verify that can input comment', () => {
		const comment = 'Comment Jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
		cy.get('#txt_comment').type(comment)
		cy.get('#txt_comment').should('have.value', comment)
	})

	it('Testcase7 - Verify that book appointment button is displayed and enabled.', () => {
		const date = new Date()
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
		const currentDate = `${month}/${day}/${year}`
		cy.get('#txt_visit_date').type(currentDate)
		cy.get('#txt_visit_date').should('have.value', currentDate)

		cy.get('#btn-book-appointment')
			.should('be.visible')
			.and('be.enabled')
			.click()
		cy.url().should('include', '#summary')
	})
})
