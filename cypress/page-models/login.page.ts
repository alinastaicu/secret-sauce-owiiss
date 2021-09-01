export interface ILogin {
  username: string;
  password: string;
}

class LoginPage {
  public navigate() {
    cy.visit('https://www.saucedemo.com');
  }

  public get username() {
    return cy.get(`[data-test="username"]`);
  }

  public get password() {
    return cy.get(`[data-test="password"]`);
  }

  public get loginButton() {
    return cy.get(`[data-test="login-button"]`);
  }

  public get errorMessage() {
    return cy.get(`[data-test="error"]`);
  }

  public fillLoginForm(data: ILogin) {
    this.username.type(data.username);
    this.password.type(data.password);
  }
}

export const loginPage = new LoginPage();
