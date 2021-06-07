/// <reference types="cypress" />

context('React Column Select | disableKeyboard', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-column-select--disabled-keyboard'
    )
  })

  it('check keyboard navigation is disabled', () => {
    cy.get('#left-column').children().first().click()
    cy.focused().should('have.text', 'Pawn')

    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'Pawn')
  })
})
