describe('Logging In', function () {
  // we can use these values to log in
    const email = 'davidwnewman91@gmail.com'
    const password = 'admin'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/')
        })

        it('displays errors on login', function () {
        // incorrect email on purpose
            cy.get('Input[name=email]').type('jane.lae')
            cy.get('Input[name=password]').type('password123{enter}')
        })

        it('redirects to /home on success', function () {
            cy.get('Input[name=email]').type(email)
            cy.get('Input[name=password]').type(password)
            cy.get('[data-cy=submit]').click()
        })
    })
})