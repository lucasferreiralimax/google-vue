describe('Test render config page', () => {
  it('Render config with title and link', () => {
    cy.visit('/config')
    cy.contains('.App-config h1', 'Configurações')
    cy.contains('.App-config a', 'Estude o código fonte desse projeto no Github acesse aqui.')
  })
  it('Render config Darkmode', () => {
    cy.contains('.App-config .darkmode', 'Dark Mode')
    cy.get('.App-config .darkmode').invoke('attr', 'aria-label').should('contain', 'Toggle darkmode')
  })
})
