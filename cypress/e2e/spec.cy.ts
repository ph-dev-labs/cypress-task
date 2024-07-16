describe('Todo app functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('adds a new todo', () => {
    const todoText = 'Learn Cypress';
    cy.get('[data-testid="new-todo"]').type(todoText);
    cy.get('form').submit();
    cy.get('[data-testid="todo-list"]').contains('li', todoText).should('exist');
  });

  it('marks a todo as completed', () => {
    const todoText = 'Learn Cypress';
    cy.get('[data-testid="new-todo"]').type(todoText);
    cy.get('form').submit();
    cy.get('[data-testid="todo-list"]').contains('li', todoText).should('exist');
    cy.get('[data-testid="todo-complete"]').click();
    cy.get('li.completed').should('exist');
  });

  it('deletes a todo', () => {
    const todoText = 'Learn Cypress';
    cy.get('[data-testid="new-todo"]').type(todoText);
    cy.get('form').submit();
    cy.get('[data-testid="todo-list"]').contains('li', todoText).should('exist');
    cy.get('[data-testid="todo-delete"]').click();
    cy.get('[data-testid="todo-list"]').contains('li', todoText).should('not.exist');
  });
});
