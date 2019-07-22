

describe('Marks review map test', function(){
    context('mapping over reviews component', function(){
        beforeEach(function(){
            cy.visit('http://localhost:3000/#/reviews')
        })

        it('displays user reviews', function(){
            cy.get('p [name=review-stars]').should('not.have', 'null')
            cy.get('p [name=review-stars]').should('not.have', '')
        })

    })

})