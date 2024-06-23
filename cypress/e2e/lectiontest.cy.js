describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('first login', () => {
    cy.login('bropet@mail.ru', '123');
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
  })
  it('empty email', () => {
    cy.login(null, '123');
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.equal('Заполните это поле.');
    })
  })
  it('empty password', () => {
    cy.login('bropet@mail.ru');
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
    })
  })
})