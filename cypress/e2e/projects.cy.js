describe("Fluxo de criação de projetos", () => {
  it("Navega para o dasboard de Projects", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Projects").click();
    cy.url().should("include", "/projects");
    cy.contains("Create Project").should("be.visible");
  });

  // it('', () => {
  //   cy.get('input[name="password"]').type('senhaerrada');

  //   cy.get('button[type="submit"]').click();

  //   // Valida a mensagem de erro
  //   cy.contains('Credenciais inválidas').should('be.visible');
  // });
});
