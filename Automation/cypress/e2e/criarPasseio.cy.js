describe('Fluxo Completo - Criar Passeio', () => {
  
    beforeEach(() => {
      cy.visit('/FeedGuia'); // Página inicial onde o botão "Novo Passeio" está localizado
    });
  
    it('Deve criar um novo passeio com sucesso', () => {
      cy.contains('Novo Passeio').click();
  
      cy.get('textarea').type('Passeio ecológico incrível!');
  
      cy.contains('Aqua Trekking').click();
  
      cy.contains('Detalhes').scrollIntoView();
  
      cy.get('input[placeholder="Quantidade de participantes"]').type('2');
  
      cy.get('input[placeholder="Data / Horário"]').type('2025-03-10');
  
      cy.get('input[placeholder="Preço"]').type('1000');
  
      cy.contains('Confirmar').click();
    });
  
  });
  