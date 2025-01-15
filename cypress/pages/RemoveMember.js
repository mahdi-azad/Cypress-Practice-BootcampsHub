class RemoveMember {
  removeMember(name, chatName) {
    cy.get(".name-title h4").contains(chatName).click();

    cy.get(".members-card")
      .contains(name)
      .parents(".members-card")
      .within(() => {
        cy.get(".action-btn").click();
      });

    cy.contains("button", "Remove").click();

    cy.get("h1.message-title")
      .contains("Are you sure to remove this member?")
      .should("be.visible");

    cy.get("button.button.primary.w-full").click();
  }
}

export default RemoveMember;
