describe('Logging In', function () {
    // we can use these values to log in
    const address2 = 'a'
    const notes = 'a'
    const address1 = 'a'
    const image = 'a'
    const name = 'abc'
    const city = 'a'
    const state = 'a'
    const zip = 'a'
    const country = 'a'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/register')
        })

        it('adds business on success', function () {
            cy.get('input[name=businesses_name]').type(name)
            cy.get('input[name=businesses_image]').type(image)
            cy.get('input[name=businesses_notes]').type(notes)
            cy.get('input[name=businesses_address_line1]').type(address1)
            cy.get('input[name=businesses_address_line2]').type(address2)
            cy.get('input[name=businesses_city]').type(city)
            cy.get('input[name=businesses_state]').type(state)
            cy.get('input[name=businesses_zip]').type(zip)
            cy.get('input[name=businesses_country]').type(country)
            cy.get('button[name=register_business]').click()

            cy.get('select').select('abc').should('have.value', 'abc')
        })
    })
})