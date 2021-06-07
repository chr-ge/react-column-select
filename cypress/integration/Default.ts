/// <reference types="cypress" />

context('React Column Select | Default', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-column-select--default'
    )
  })

  it('check column titles', () => {
    cy.get('p').contains('Available Pieces')
    cy.get('p').contains('Selected Pieces')
  })

  it('check initial column options length', () => {
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)
  })

  it('check click add option', () => {
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 5)
    cy.get('#right-column').children().should('have.length', 1)
  })

  it('check click remove option', () => {
    cy.get('#Add').click()
    cy.get('#Remove').click()
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)
  })

  it('check click add all option', () => {
    cy.get('#Add_All').click()
    cy.get('#left-column').children().should('have.length', 0)
    cy.get('#right-column').children().should('have.length', 6)

    cy.get('#Add').should('be.disabled')
    cy.get('#Add_All').should('be.disabled')
  })

  it('check click remove all option', () => {
    cy.get('#Add_All').click()
    cy.get('#Remove_All').click()
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)

    cy.get('#Remove').should('be.disabled')
    cy.get('#Remove_All').should('be.disabled')
  })

  it('check keyboard navigation', () => {
    cy.get('#left-column').children().first().click()
    cy.focused().should('have.text', 'Pawn')

    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'Bishop')
    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'Knight')
    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'Rook')
    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'Queen')
    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'King')
    cy.get('#left-column').trigger('keydown', { keyCode: 40, which: 40 }) // Down Arrow
    cy.focused().should('have.text', 'King')

    cy.get('#left-column').trigger('keydown', { keyCode: 38, which: 38 }) // Up Arrow
    cy.focused().should('have.text', 'Queen')
    cy.get('#left-column').trigger('keydown', { keyCode: 38, which: 38 }) // Up Arrow
    cy.focused().should('have.text', 'Rook')
    cy.get('#left-column').trigger('keydown', { keyCode: 38, which: 38 }) // Up Arrow
    cy.focused().should('have.text', 'Knight')
    cy.get('#left-column').trigger('keydown', { keyCode: 38, which: 38 }) // Up Arrow
    cy.focused().should('have.text', 'Bishop')
    cy.get('#left-column').trigger('keydown', { keyCode: 38, which: 38 }) // Up Arrow
    cy.focused().should('have.text', 'Pawn')
    cy.get('#left-column').trigger('keydown', { keyCode: 38, which: 38 }) // Up Arrow
    cy.focused().should('have.text', 'Pawn')
  })
})
