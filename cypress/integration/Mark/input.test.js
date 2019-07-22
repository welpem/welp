describe('Input check', function (){
    it('checks for inputs on page', function(){
        cy.visit('localhost:3000/#/reviews')

        cy.get('input')
    })
})