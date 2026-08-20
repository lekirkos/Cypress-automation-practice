describe('Login Data Driven Tests', () => {
  beforeEach(() => {
    cy.fixture('login-users').as('users');
  });

  it('runs login tests with different users from fixture data', function () {
    this.users.forEach((user) => {
      cy.login(user.username, user.password);

      cy.get('#flash').should('contain', user.expectedMessage);
    });
  });
});