class Login {
  login(email, password) {
    // Visiting the home page
    cy.visit("/");

    // Clicking the login button
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();

    // Entering email
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type(email);

    // Entering password
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type(password);

    // Submitting the form
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click();
  }
}

export default Login;
