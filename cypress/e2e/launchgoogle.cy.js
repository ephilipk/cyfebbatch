describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.contains('Accept all').click()
      cy.get("#APjFqb").type('Pets{enter}')
    
  })
})

