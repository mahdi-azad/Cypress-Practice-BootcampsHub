import Login from "../pages/Login";

describe("Going to Assessment in Online Course", () => {
  it.only("Get to Assessment in Online Course", () => {
    const login = new Login();
    cy.fixture("credentials.json").then((data) => {
      login.login(data.email, data.password);
    });

    cy.get("#__next > div > div > div.ant-empty-footer > button").click();

    cy.get(
      "body > div:nth-child(8) > div > div.ant-modal-wrap > div > div:nth-child(1) > div > div.ant-modal-body > div > div > div > ul > li > ul > li > button > span"
    ).click();

    cy.contains("a.link", "Courses")
      .should("be.visible")
      .and("have.attr", "aria-haspopup", "menu")
      .click();

    cy.contains("button.mantine-UnstyledButton-root", "Online Courses")
      .should("be.visible")
      .click();

    cy.get(
      "#__next > div > div > div.bg-color.purchased-items > div > div.section-card.section-card.courses > div > div:nth-child(1) > div.course-content.text-black.capitalize > h4"
    ).should("contain", "Automation with Cypress by Shohaib and Riajul");

    cy.get(
      "#__next > div > div > div.bg-color.purchased-items > div > div.section-card.section-card.courses > div > div:nth-child(1) > div.course-content.text-black.capitalize > div > a.default_btn.back_button"
    ).should("contain", "Payments");

    cy.get('button:contains("Assessments")').should("be.visible").click();

    cy.wait(2000);

    cy.get("button.btn.primary-btn") // Select all "Test Now" buttons
      .first() // Get the first button
      .should("be.visible") // Ensure the button is visible
      .click(); // Click the button

    cy.get("button.ts4u-primary-btn.primary-hard") // Select the button by its class
      .should("be.visible") // Ensure the button is visible
      .and("contain.text", "Start Test") // Confirm the button has the text "Start Test"
      .click();
  });
});
