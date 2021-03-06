


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
            cy.get('button[name=add-review]').click()
            cy.get('textarea[name=add-review-title]').type('test-delete')
            cy.get('textarea[name=add-review-image]').type('https://dingo.care2.com/pictures/c2c/share/36/364/440/3644087_370.jpg')
            cy.get('textarea[name=add-review-description]').type('test-delete')
            cy.get('select[id=stars]').select('5')
            cy.get('button[name=18]').click()

            cy.get('p[name=review-description]').should('have', 'test-delete')
            cy.get('p[name=review-title]').should('have', 'test-delete')
            cy.get('p[name=review-image]').should('have', 'https://dingo.care2.com/pictures/c2c/share/36/364/440/3644087_370.jpg')
        })

    })

})