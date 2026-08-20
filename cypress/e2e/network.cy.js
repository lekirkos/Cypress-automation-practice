describe('Network Requests', () => {
  it('intercepts a real network request', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('GET', '**/comments/*').as('getComment');

    cy.contains('button', 'Get Comment').click();

    cy.wait('@getComment').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    cy.get('.network-comment').should('contain', 'laudantium');
  });

  it('stubs a fake network response', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('GET', '**/comments/*', {
      statusCode: 200,
      body: {
        postId: 1,
        id: 1,
        name: 'Mocked Comment',
        email: 'mock@example.com',
        body: 'This is a mocked response from Cypress'
      }
    }).as('getMockedComment');

    cy.contains('button', 'Get Comment').click();

    cy.wait('@getMockedComment');

    cy.get('.network-comment').should('contain', 'This is a mocked response from Cypress');
  });

  it('handles an API error response', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('GET', '**/comments/*', {
      statusCode: 500,
      body: {
        error: 'Internal Server Error'
      }
    }).as('getCommentError');

    cy.contains('button', 'Get Comment').click();

    cy.wait('@getCommentError').then((interception) => {
      expect(interception.response.statusCode).to.eq(500);
    });
  });
});