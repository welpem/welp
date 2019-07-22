describe('Marks comments map test', function(){
    context('comments default value  component', function(){
        beforeEach(function(){
            cy.visit('http://localhost:3000/#/reviews')
        })

        it('displays user reviews', function(){
            cy.get('div [comments-user-info]').should('have', 'defaultValue')
        })

    })

})