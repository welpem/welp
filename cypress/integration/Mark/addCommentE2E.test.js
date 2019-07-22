


// describe('Logging In', function () {
//     // we can use these values to log in
//     const email = 'mark'
//     const password = 'mark'


//     context('HTML form submission', function () {
//         beforeEach(function () {
//             cy.visit('localhost:3000/#/')
//         })


    

//         it('redirects to /home on success', function () {
//             cy.get('Input[name=email]').type(email)
//             cy.get('Input[name=password]').type(password)
//             cy.get('SubmitButton').click()

//             // we should be redirected to /home
//             cy.url().should('include', '/home')
//         })
//     })
// })


describe('add comment', function () {
    context('make sure add comment works', function(){
        beforeEach(function(){
            cy.visit('http://localhost:3000/#/reviews')
        })

        it('adds a comment', function(){
            cy.get('textarea[name=18]').type('test-delete')
            cy.get('button[name=18]').click()
            cy.get('p[name=review-description]').should('have', 'test-delete')
        })

    })

})