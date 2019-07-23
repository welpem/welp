describe('Logging In', function () {
    // we can use these values to log in
    const email = 'mark'
    const password = 'mark'


    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/')
        })


    

        it('redirects to /home on success', function () {
            cy.get('Input[name=email]').type(email)
            cy.get('Input[name=password]').type(password)
            cy.get('[data-cy=submit]').click()

            // we should be redirected to /home
            cy.url().should('include', '/#/')
        })
    })
})