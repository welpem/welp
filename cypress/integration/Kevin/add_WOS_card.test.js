describe('Adding WOS entry', function () {
    // we can use these values to add a test card
    const title = 'test'
    const img_url = 'test'
    const description = 'test'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:3000/#/wos')
        })

        it('displays errors on login', function () {
        // incorrect email on purpose
        cy.get('input[name=new_email]').type(title)
        cy.get('input[name=new_password]').type(img_url)
        cy.get('input[name=first_name]').type(description)
        cy.get('button[name=register_user').click()

        // we should have visible errors now
        //   cy.get('p.error')
        //   .should('be.visible')
        //   .and('contain', 'email and/or password is incorrect')

        // and still be on the same URL
        //   cy.url().should('include', '/login')
        })

        it('redirects to /home on success', function () {
            cy.get('input[name=new_email]').type(email)
            cy.get('input[name=new_password]').type(password)
            cy.get('input[name=first_name]').type(first_name)
            cy.get('input[name=last_name]').type(last_name)
            cy.get('input[name=image]').type(image)
            cy.get('button[name=register_user').click()

            // we should be redirected to /home
            cy.url().should('include', '/home')
        })
    })
})
