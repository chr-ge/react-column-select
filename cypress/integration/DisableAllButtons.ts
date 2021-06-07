/// <reference types="cypress" />

context('React Column Select | disableAllButtons', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-column-select--disable-all-buttons'
    )
  })

  it('check add all button is hidden', () => {
    cy.get('#Add_All').should('not.exist')
  })

  it('check remove all button is hidden', () => {
    cy.get('#Remove_All').should('not.exist')
  })
})
