describe('Placeholder changes', function () {
    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/register')
        })

        it('changes placeholder', function () {
            cy.get('input[name=first_name]').type('a')
            cy.get('input[name=first_name]').should('have.value', 'a')
        })
    })
})