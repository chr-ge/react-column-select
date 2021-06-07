/// <reference types="cypress" />

context('React Column Select | Default Values', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-column-select--default-values'
    )
  })

  it('check initial column options length', () => {
    cy.get('#left-column').children().should('have.length', 4)
    cy.get('#right-column').children().should('have.length', 2)
  })
})
