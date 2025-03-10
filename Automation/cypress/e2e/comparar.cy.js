describe('Fluxo Completo - Participar e Comparar', () => {
  
    beforeEach(() => {
      cy.visit('/'); // A URL base foi configurada no arquivo cypress.config.js
    });
  
    it('Deve clicar no botão "Participar!" e depois verificar se o botão "Comparar" aparece', () => {
      cy.contains('Participar!')
        .scrollIntoView()  
        .should('be.visible') 
        .click();
  
      cy.contains('Comparar').should('be.visible');
    });
  
  });
  