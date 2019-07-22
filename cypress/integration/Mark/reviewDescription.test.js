

describe('Marks review map description test', function(){
    context('mapping over reviews description', function(){
        beforeEach(function(){
            cy.visit('http://localhost:3000/#/reviews')
        })

        it('displays user reviews', function(){
            cy.get('p [name=review-description]').should('not.have', 'null')
            cy.get('p [name=review-description]').should('not.have', '')
        })

    })

})