import Login from "../pages/Login";

describe("Verifying the Url", () => {
  it("Get to video in Online Course", () => {
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

    //checking title
    cy.get(
      "#__next > div > div > div.bg-color.purchased-items > div > div.section-card.section-card.courses > div > div:nth-child(1) > div.course-content.text-black.capitalize > h4"
    ).should("contain", "Automation with Cypress by Shohaib and Riajul");

    //checking payment button
    cy.get(
      "#__next > div > div > div.bg-color.purchased-items > div > div.section-card.section-card.courses > div > div:nth-child(1) > div.course-content.text-black.capitalize > div > a.default_btn.back_button"
    ).should("contain", "Payments");

    //checking go to course button
    cy.get(
      "#__next > div > div > div.bg-color.purchased-items > div > div.section-card.section-card.courses > div > div:nth-child(1) > div.course-content.text-black.capitalize > div > a.default_btn_dark.back_button"
    )
      .should("contain", "Go to Course")
      .click();

    cy.get(
      "#__next > div > div > div.bg-color > div > div.program-tab-container > div.m-18320242.mantine-Skeleton-root > div > div > div.all-chapters > div > div > div > div > div > div > h2 > span:nth-child(1)"
    )
      .should("contain", "Automation with Cypress")
      .click();

    cy.get(
      "#__next > div > div > div.bg-color > div > div.program-tab-container > div.m-18320242.mantine-Skeleton-root > div > div > div.all-chapters > div > div > div.children_container > div:nth-child(1) > div > div > div > div > div > h2 > span:nth-child(1)"
    )
      .should("contain", "GUI Automation testing with Cypress")
      .click();

    cy.get(
      "#__next > div > div > div.bg-color > div > div.program-tab-container > div.m-18320242.mantine-Skeleton-root > div > div > div.all-chapters > div > div > div.children_container > div:nth-child(1) > div > div.children_container > div:nth-child(1) > div > div > div > div > div > h2 > span:nth-child(1)"
    )
      .should("contain", "GUI Cypress crush course video 1")
      .click();
  });
});
