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

    cy.contains("a.link", "Courses")
      .should("be.visible")
      .and("have.attr", "aria-haspopup", "menu")
      .click();

    cy.contains("button.mantine-UnstyledButton-root", "Bootcamps")
      .should("be.visible")
      .click();

    cy.get('button[data-menu-item="true"]')
      .contains("Show n Tell")
      .should("be.visible")
      .click();

    cy.get("button.ts4u-primary-btn")
      //   .should("be.visible")
      //   .and("contain.text", "Add new")
      .click({ force: true });

    cy.wait(2000);

    cy.get("button.ts4u-primary-btn").click({ force: true });

    cy.get("#title").should("be.visible").type("Example SNT 2");

    cy.get('textarea[placeholder="Enter Agenda"]') // Select the textarea by its placeholder
      .should("be.visible")
      .type("This is an example SNT");

    //add a user
    cy.get(":nth-child(4) > .add_Button").click();

    cy.get('button.ud_view_btn[type="submit"]') // Select the Add button by its class and type
      .scrollIntoView() // Scroll to make the button visible
      .should("be.visible") // Ensure the button is now visible
      .and("contain.text", "Add") // Confirm the button text is "Add"
      .click();
  });
});
