describe('Test render home page', () => {
  it('Render header with logo, title and link', () => {
    cy.visit('/')
    cy.contains('.App-header h1', 'Deus é Maior')
    cy.contains('.App-header h2', 'Vue.js')
    cy.get('.App-logo').invoke('attr', 'alt').should('contain', 'logo Google')
    cy.get('.App-header a').invoke('attr', 'href').should('contain', 'https://v3.vuejs.org')
  })
  it('Render profile component', () => {
    cy.contains('.App-profile h1', '2L')
    cy.get('.App-profile-foto').should('exist')
    cy.get('.App-profile-foto').invoke('attr', 'alt').should('contain', 'Foto Frank Sinatra')
  })
  it('Render nav component', () => {
    cy.get('.App-nav-menu').should('exist')
    cy.get('.App-nav-menu svg').should('exist')
    cy.get('.App-nav-menu').invoke('attr', 'aria-label').should('contain', 'Toggle menu show')
  })
  it('Render search component', () => {
    cy.contains('.label-search', 'Pesquise ou digite uma URL')
    cy.get('.label-search .icon-search').should('exist')
    cy.get('.App-search-input').invoke('attr', 'placeholder').should('contain', 'Pesquise no Google ou digite um URL')
  })
  it('Render search buttons', () => {
    cy.get('.App-search .btn.clean').should('exist')
    cy.get('.App-search .btn.keyboard').should('exist')
    cy.get('.App-search .btn.voice').should('exist')
    cy.get('.App-search .btn.search').should('exist')
    cy.get('.App-search .btn.lucky').should('exist')
  })
  it('Render footer Flag Brasil', () => {
    cy.get('.App-footer .brasil svg').should('exist')
    cy.contains('.App-footer .brasil', 'Brasil')
  })
  it('Render footer Darkmode', () => {
    cy.get('.App-footer .darkmode svg').should('exist')
    cy.get('.App-footer .darkmode').invoke('attr', 'aria-label').should('contain', 'Toggle darkmode')
  })
  it('Render footer Credits Lucas', () => {
    cy.contains('.App-footer a:nth-of-type(1)', '@lucasferreiralimax')
    cy.get('.App-footer a:nth-of-type(1)').invoke('attr', 'href').should('contain', 'https://github.com/lucasferreiralimax')
  })
  it('Render footer link config', () => {
    cy.contains('.App-footer a:nth-of-type(2)', 'Configurações')
    cy.get('.App-footer a:nth-of-type(2)').invoke('attr', 'href').should('contain', '/config')
  })
})
