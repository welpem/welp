describe('User and Business are separate', function () {
    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/register')
        })

        it('changes placeholder', function () {
            cy.get('input[name=first_name]').type('a')
            cy.get('input[name=first_name]').should('have.value', 'a')
            cy.get('input[name=last_name]').type('a')
            cy.get('input[name=last_name]').should('have.value', 'a')
            cy.get('input[name=new_password]').type('a')
            cy.get('input[name=new_password]').should('have.value', 'a')
            cy.get('input[name=new_email]').type('a')
            cy.get('input[name=new_email]').should('have.value', 'a')
            cy.get('input[name=image]').type('a')
            cy.get('input[name=image]').should('have.value', 'a')
        })
        it('has not changed', function(){
            cy.get('input[name=businesses_name]').should('not.have.value', 'a')
            cy.get('input[name=businesses_image]').should('not.have.value', 'a')
            cy.get('input[name=businesses_notes]').should('not.have.value', 'a')
            cy.get('input[name=businesses_address_line1]').should('not.have.value', 'a')
            cy.get('input[name=businesses_address_line2]').should('not.have.value', 'a')
            cy.get('input[name=businesses_city]').should('not.have.value', 'a')
            cy.get('input[name=businesses_state]').should('not.have.value', 'a')
            cy.get('input[name=businesses_zip]').should('not.have.value', 'a')
            cy.get('input[name=businesses_country]').should('not.have.value', 'a')
        })
    })
})