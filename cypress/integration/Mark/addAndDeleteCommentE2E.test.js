describe('Logging In', function () {
    // we can use these values to log in
    const email = 'mark'
    const password = 'mark'


    context('delete stuff', function () {


        it('log in', function () {
            cy.visit('localhost:3000/#/')
            cy.get('Input[name=email]').type(email)
            cy.get('Input[name=password]').type(password)
            cy.get('[data-cy=submit]').click()

            //now that you are logged in, you can do stuff

            cy.visit('localhost:3000/#/reviews')

            //add a review
            cy.get('textarea[name=18]').type('test-delete')
            cy.get('button[name=18]').click()
            cy.get('p[name=review-description]').should('have', 'test-delete')





        })
   
  })

}) 

