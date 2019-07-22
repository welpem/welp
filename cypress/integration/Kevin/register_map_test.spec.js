describe('Mapping Test', function (){
    context('Mapping over WOS entries from db', function(){
        beforeEach(function(){
            cy.visit('localhost:3000/#/wos')
        })

        it('displays wos entries', function(){
            cy.get('').should('have.value', 'Wcdonalds')
            cy.get('select').select('Fries King').should('have.value', 'Fries King')
        })
    })
})