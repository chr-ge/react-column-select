/// <reference types="cypress" />

context('React Column Select | disableDoubleClick', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-column-select--disabled-double-click'
    )
  })

  it('check double click to add to be disabled', () => {
    cy.get('#left-column').children().first().dblclick()
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)
  })

  it('check double click to remove to be disabled', () => {
    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 5)
    cy.get('#right-column').children().should('have.length', 1)

    cy.get('#right-column').children().first().dblclick()
    cy.get('#left-column').children().should('have.length', 5)
    cy.get('#right-column').children().should('have.length', 1)
  })
})
