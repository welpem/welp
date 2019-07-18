describe('Mapping Test', function (){
    context('Mapping over business names from db', function(){
        beforeEach(function(){
            cy.visit('localhost:3000/#/register')
        })

        it('displays business names as options', function(){
            cy.get('select').select('Wcdonalds').should('have.value', 'Wcdonalds')
            cy.get('select').select('Fries King').should('have.value', 'Fries King')
        })
    })
})