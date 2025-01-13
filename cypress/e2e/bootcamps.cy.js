describe("Testing Within BootcampsHub", () => {
  it("Visiting The Site", () => {
    cy.visit("/");

    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > h2"
    ).should("have.text", "One Stop Solution for Trade School & Students");
  });

  it.only("Logging In, Creating Crowd, Removing Someone, Archiving", () => {
    cy.visit("/");

    //Logging In
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type("mahdiazad1998@gmail.com");

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type("Test123!");

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click();

    cy.get("#__next > div > div > div.ant-empty-footer > button").click();

    cy.get(
      "body > div:nth-child(8) > div > div.ant-modal-wrap > div > div:nth-child(1) > div > div.ant-modal-body > div > div > div > ul > li > ul > li > button > span"
    ).click();

    // cy.url().should("eq", "https://portal.bootcampshub.ai/dashboard");

    //Creating New Crowd
    cy.get(
      "#header_2 > nav > div > div > ul > li:nth-child(3) > button"
    ).click();

    cy.visit("https://portal.bootcampshub.ai/chat");

    cy.get(".start-button").click();

    cy.contains("li.ant-dropdown-menu-item", "New Crowd").click();

    cy.get("#name").type("Example Crowd");

    cy.get("textarea[placeholder = 'Maximum 200 character']").type(
      "This is an example test description"
    );

    cy.get("button.button.primary").click();

    //Adding Members
    cy.get("input[placeholder = 'Search user']").type(
      "khanshohaibhossain@gmail.com"
    );

    cy.get(".info")
      .contains(".email", "khanshohaibhossain@gmail.com")
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", "Shohaib hossain");
      });

    cy.contains(".user_item", "khanshohaibhossain@gmail.com")
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });

    cy.get("input[placeholder = 'Search user']")
      .clear()
      .type("she2farah@gmail.com");

    cy.get(".info")
      .contains(".email", "she2farah@gmail.com")
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", "Khadija Farah");
      });

    cy.contains(".user_item", "she2farah@gmail.com")
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });

    cy.get("button.button.primary").eq(1).click();

    cy.visit("https://portal.bootcampshub.ai/chat/677f2007c724cd001a36821c");

    //Removing A Member
    cy.get(".name-title h4").contains("Example Crowd").click();

    cy.get(".members-card")
      .contains("Khadija Farah")
      .parents(".members-card")
      .within(() => {
        cy.get(".action-btn").click();
      });

    cy.contains("button", "Remove").click();

    cy.get("h1.message-title")
      .contains("Are you sure to remove this member?")
      .should("be.visible");

    cy.get("button.button.primary.w-full").click();

    //Archiving the Chat Crowd
    cy.get("button.archive-group").click();

    //Sending a file into the chat crowd

    cy.get('button.icon-btn[aria-expanded="false"] svg path[fill="#546A7E"]')
      .parents("button.icon-btn")
      .click();

    cy.contains("div", "Photos & Videos").should("be.visible").click();

    cy.get("input[type='file']").attachFile("avatar.png");

    cy.get(".text_input_box__input").type("This is an avatar image");

    cy.get("button.icon-btn.sent-btn").should("be.visible").click();
  });
});
