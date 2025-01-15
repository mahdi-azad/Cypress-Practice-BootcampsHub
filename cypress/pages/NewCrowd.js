class NewCrowd {
  createNewCrowd(crowdName, description) {
    // Navigate to Create Crowd section
    cy.get(
      "#header_2 > nav > div > div > ul > li:nth-child(3) > button"
    ).click();

    // Visit the chat page
    cy.visit("https://portal.bootcampshub.ai/chat");

    // Start creating a new crowd
    cy.get(".start-button").click();

    // Select "New Crowd" option
    cy.contains("li.ant-dropdown-menu-item", "New Crowd").click();

    // Enter crowd name
    cy.get("#name").type(crowdName);

    // Enter description
    cy.get("textarea[placeholder = 'Maximum 200 character']").type(description);

    // Submit the new crowd form
    cy.get("button.button.primary").click();
  }
}

export default NewCrowd;
