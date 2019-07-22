describe('Logging In', function () {
    // we can use these values to log in
    const takenEmail = 'davidwnewman91@gmail.com'
    const first_name = 'a'
    const last_name = 'a'
    const password = 'a'
    const email = 'a'
    const image = 'a'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/register')
        })

        it('displays errors on login', function () {
        // incorrect email on purpose
        cy.get('input[name=new_email]').type(takenEmail)
        cy.get('input[name=new_password]').type(password)
        cy.get('input[name=first_name]').type(first_name)
        cy.get('input[name=last_name]').type(last_name)
        cy.get('input[name=image]').type(image)
        cy.get('button[name=register_user').click()
        })

        it('redirects to /home on success', function () {
            cy.get('input[name=new_email]').type(email)
            cy.get('input[name=new_password]').type(password)
            cy.get('input[name=first_name]').type(first_name)
            cy.get('input[name=last_name]').type(last_name)
            cy.get('input[name=image]').type(image)
            cy.get('button[name=register_user').click()
        })
    })
})
