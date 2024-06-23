describe('template spec', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login('bropet@mail.ru', '123');
    })
    it('adding book', () => {
        cy.addBook('testBook','first testBook','testAuthor');
        cy.contains('testBook').should('be.visible');
    })
    it('add to favorits', () => {
        cy.addBook('testBook','first testBook','testAuthor');
        cy.get(' .h-100 > .card-footer > .btn').eq(0).click();
        cy.get('h4').click();
        cy.contains('testBook').should('be.visible');
    })
    it('empty Author', () => {
        cy.addBook(null,'first testBook','testAuthor');
        cy.get('#title').then((elements) => {
            expect(elements[0].checkValidity()).to.be.false;
          })
    })
  })