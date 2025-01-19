import Login from "../pages/Login";

describe("Verifying the Url", () => {
  it("Ensure the dashboard URL is correct after visiting", () => {
    const login = new Login();
    cy.fixture("credentials.json").then((data) => {
      login.login(data.email, data.password);
    });

    cy.get("#__next > div > div > div.ant-empty-footer > button").click();

    cy.get(
      "body > div:nth-child(8) > div > div.ant-modal-wrap > div > div:nth-child(1) > div > div.ant-modal-body > div > div > div > ul > li > ul > li > button > span"
    ).click();

    cy.url().should("contain", "/dashboard");

    //Check the title works and matches with expected value
    cy.get("h1.page-title").should("be.visible").and("have.text", "Dashboard"); // Confirm the text is exactly "Dashboard"

    const expectedOverallProgress = "Overall Progress";
    const expectedCalendar = "Calendar";

    // Assert the "Overall Progress" title matches the expected value
    cy.get("h1.section-title")
      .contains(expectedOverallProgress)
      .invoke("text")
      .should((text) => {
        expect(text.trim()).to.eq(expectedOverallProgress);
      });

    // Assert the "Calendar" title matches the expected value
    cy.get("h1.section-title")
      .contains(expectedCalendar)
      .invoke("text")
      .should((text) => {
        expect(text.trim()).to.eq(expectedCalendar);
      });
  });
});
