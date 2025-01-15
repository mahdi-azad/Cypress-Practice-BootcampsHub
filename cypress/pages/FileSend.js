class FileSend {
  sendFile(filePath, associatedMessage) {
    cy.get('button.icon-btn[aria-expanded="false"] svg path[fill="#546A7E"]')
      .parents("button.icon-btn")
      .click();

    cy.contains("div", "Photos & Videos").should("be.visible").click();

    cy.get("input[type='file']").attachFile(filePath);

    cy.get(".text_input_box__input").type(associatedMessage);

    cy.get("button.icon-btn.sent-btn").should("be.visible").click();
  }
}

export default FileSend;

//"avatar.png"
//"This is an avatar image"
