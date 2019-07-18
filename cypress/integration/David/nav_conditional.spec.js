describe('Conditional rendering on login', function () {
    // we can use these values to log in
      const email = 'davidwnewman91@gmail.com'
      const password = 'admin'
  
      context('HTML form submission', function () {
          beforeEach(function () {
              cy.visit('localhost:3000/#/wos')
          })
  
          it('displays login', function () {
          // incorrect email on purpose
              cy.get('button').contains('Log In')
  
          // we should have visible errors now
          //   cy.get('p.error')
          //   .should('be.visible')
          //   .and('contain', 'email and/or password is incorrect')
  
          // and still be on the same URL
          //   cy.url().should('include', '/login')
          })
  
          it('displays logout', function () {
            cy.get('input[name=email]').type(email)
            cy.get('input[name=password]').type(password)
            cy.get('button').click()

            cy.get('button[name=logout]').contains('Log Out')
          })
      })
  })