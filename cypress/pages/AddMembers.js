class AddMembers {
  addMember(email, name) {
    cy.get("input[placeholder = 'Search user']").type(email);

    cy.get(".info")
      .contains(".email", email)
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", name);
      });

    cy.contains(".user_item", email)
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });

    cy.get("input[placeholder = 'Search user']").clear();
  }
}

export default AddMembers;
