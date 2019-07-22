describe('Button check', function (){
    it('checks for buttons on page', function(){
        cy.visit('localhost:3000/#/wos')
        cy.get('button')
    })
})