describe('Conditional rendering of add button on WOS', function () {
    // we can use these values to log in
      const email = 'a'
      const password = 'a'
      context('HTML form submission', function () {
        it('Login', function () {
        cy.visit('localhost:3000/#/')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('button').click()
        cy.visit('localhost:3000/#/wos')
        cy.get('button')
        
    })
            it('displays business name', function(){
                cy.get('#busName').should('have.value', '')
            })
            it('displays user name', function(){
                cy.get('#firstName').should('have.value', '')
            })

      })
  })