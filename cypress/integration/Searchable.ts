/// <reference types="cypress" />

context('React Column Select | Searchable', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=example-column-select--searchable')
  })

  it('check initial column options length', () => {
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)
  })

  it('check search and click add option', () => {
    cy.get('#left-search').type('Bishop')
    cy.get('#left-column').children().should('have.length', 1)
    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 0)
    cy.get('#right-column').children().should('have.length', 1)
  })

  it('check search and click remove option', () => {
    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 4)
    cy.get('#right-column').children().should('have.length', 2)
    
    cy.get('#left-search').clear()
    cy.get('#right-search').type('Pawn')
    cy.get('#right-column').children().first().click()
    cy.get('#Remove').click()
    cy.get('#left-column').children().should('have.length', 5)
    cy.get('#right-column').children().should('have.length', 0)
    cy.get('#right-search').clear()
    cy.get('#right-column').children().should('have.length', 1)
  })
})
