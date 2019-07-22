describe('Test Wall of Shame', function () {
    // we can use these values to add a test card
    const email = 'a'
    const password = 'a'
    const title = 'test'
    const img_url = 'test'
    const description = 'test'

    context('HTML form submission', function () {
        it('Login', function () {
        cy.visit('localhost:3000/#/')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('button').click()

        cy.visit('localhost:3000/#/wos')
        
    })
        it('Takes in business name', function() {
            cy.get('#searchBusInput').type('wc').should('have.value', 'wc')
        })
        it('Filters WOS by business name',  function() {
            cy.get('#searchBusButton').click()
        })
        it('Takes in user first name', function() {
            cy.get('#searchUserInput').type('olga').should('have.value', 'olga')
        })
        it('Filters WOS by user name',  function() {
            cy.get('#searchUserButton').click()
        })
    // it('adds a test card to the wall of shame', function () {
    //     cy.get('Input[name=new_email]').type(email)
    //     cy.get('Input[name=new_password]').type(password)
    //     cy.get('Input[name=first_name]').type(first_name)
    //     cy.get('Input[name=last_name]').type(last_name)
    //     cy.get('Input[name=image]').type(image)
    //     cy.get('Input[name=first_name]').type(description)
    //     cy.get('button[name=register_user').click()
        
    //     we should be redirected to /home
    //     cy.url().should('include', '/home')
    // })
    })
})
