/// <reference types="cypress" />

context('React Column Select | Max', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=example-column-select--max')
  })

  it('check initial column options length', () => {
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)
  })

  it('check click add option', () => {
    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 5)
    cy.get('#right-column').children().should('have.length', 1)

    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 4)
    cy.get('#right-column').children().should('have.length', 2)

    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#left-column').children().should('have.length', 3)
    cy.get('#right-column').children().should('have.length', 3)

    cy.get('#Add').should('be.disabled')
  })

  it('check click remove option', () => {
    cy.get('#Add').click()
    cy.get('#Remove').click()
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)
  })

  it('check click add all button is disabled', () => {
    cy.get('#Add_All').should('be.disabled')
  })

  it('check click remove all option', () => {
    cy.get('#left-column').children().first().click()
    cy.get('#Add').click()
    cy.get('#Remove_All').click()
    cy.get('#left-column').children().should('have.length', 6)
    cy.get('#right-column').children().should('have.length', 0)

    cy.get('#Remove').should('be.disabled')
    cy.get('#Remove_All').should('be.disabled')
  })
})
