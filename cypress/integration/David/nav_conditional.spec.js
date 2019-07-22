describe('Conditional rendering on login', function () {
    // we can use these values to log in
      const email = 'davidwnewman91@gmail.com'
      const password = 'admin'
  
      context('HTML form submission', function () {
          beforeEach(function () {
              cy.visit('localhost:3000/#/')
          })
  
          it('displays login', function () {
            cy.get('[data-cy="submit"]').contains('SUBMIT')
          })
  
          it('displays logout', function () {
            cy.get('[data-cy="emailInput"]').type(email)
            cy.get('[data-cy="passwordInput"]').type(password)
            cy.get('[data-cy="submit"]').click()

            cy.get('[data-cy="logout"]').contains('Log Out')
          })
      })
  })