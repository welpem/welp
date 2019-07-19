describe('Logging In', function () {
  // we can use these values to log in
    const email = 'davidwnewman91@gmail.com'
    const password = 'admin'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/wos')
        })

        it('displays errors on login', function () {
        // incorrect email on purpose
            cy.get('input[name=email]').type('jane.lae')
            cy.get('input[name=password]').type('password123{enter}')

        // we should have visible errors now
        //   cy.get('p.error')
        //   .should('be.visible')
        //   .and('contain', 'email and/or password is incorrect')

        // and still be on the same URL
        //   cy.url().should('include', '/login')
        })

        it('redirects to /home on success', function () {
            cy.get('input[name=email]').type(email)
            cy.get('input[name=password]').type(password)
            cy.get('button').click()

            // we should be redirected to /home
            cy.url().should('include', '/home')
        })
    })
})
