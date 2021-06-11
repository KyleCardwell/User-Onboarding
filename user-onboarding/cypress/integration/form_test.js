describe("User Form App", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[id="inputName"]')
    const emailInput = () => cy.get('input[id="inputEmail"]')
    const passwordInput = () => cy.get('input[id="inputPassword"]')
    const termsInput = () => cy.get('input[type="checkbox"]')
    const submitButton = () => cy.get('button[id="submitBtn"]')

    const testName = 'Kyle'
    const testEmail = 'kyle@kyle.com'
    const testPassword = 'asdfwert8'


    it('filling out inputs', () => {

        submitButton().should('not.be.enabled')
        nameInput().type(testName).should('have.value', testName)
        emailInput().type(testEmail)
        passwordInput().type(testPassword)
        termsInput().check()
        submitButton().should('be.enabled')

    })


})