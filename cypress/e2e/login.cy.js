describe('Login Flow', () => {
    it('logs with valid credentials', () =>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.get('#flash').should('be.visible').and('contain', 'You logged into a secure area!')
        cy.url().should('include', '/secure')
    })
})