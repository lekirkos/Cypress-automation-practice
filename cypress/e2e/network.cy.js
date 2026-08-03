describe('Network Request', () => {
  it('intercepts a network reques', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.intercept('GET','**/comments/*').as('getComment');
    cy.contains('button', 'Get Comment').click();
    cy.wait('@getComment');
    cy.get('.network-comment').should('contain', 'laudantium');
  })
})