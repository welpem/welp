describe('Conditional rendering of add button on WOS', function () {
    // we can use these values to log in
      const email = 'a'
      const password = 'a'
  
      context('Add offender', function () {
          beforeEach(function () {
              cy.visit('localhost:3000/#/wos')
          })
  
          it('displays add', function () {
              cy.get('button').contains('Add offender')
  
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