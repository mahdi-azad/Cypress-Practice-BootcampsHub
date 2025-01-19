class CreateSNT {
  createSnt() {
    //user should be logged in and in the dashboard page

    cy.get("#mantine-b58z30lqu-target")
      // Assert that the button is visible on the page
      .should("be.visible")
      // Optionally assert that the button contains the text "Courses"
      .and("contain.text", "Courses")
      // Click the button
      .click();
  }
}

export default CreateSNT;
