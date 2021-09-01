import * as users from '../data/users';

import { loginPage } from '../page-models/login.page';

describe('GIVEN I am able to login with STANDARD USER', () => {
  describe(`WHEN I login`, () => {
    before(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: users.standardUser.username, password: users.standardUser.password });
      loginPage.loginButton.click();
    });
    it('SHOULD navigate to the items page', () => cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html'));
  });
});

describe('GIVEN I see the error message when I login with LOCKED OUT USER', () => {
  describe(`WHEN I login`, () => {
    before(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: users.lockedOutUser.username, password: users.lockedOutUser.password });
      loginPage.loginButton.click();
    });
    it('SHOULD see the error message', () =>
      loginPage.errorMessage.should('contain.text', 'Epic sadface: Sorry, this user has been locked out.').should('be.visible'));
  });
});

describe('GIVEN I am able to login with PROBLEM USER', () => {
  describe(`WHEN I login`, () => {
    before(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: users.problemUser.username, password: users.problemUser.password });
      loginPage.loginButton.click();
    });
    it('SHOULD navigate to the items page', () => cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html'));
  });
});

describe('GIVEN I am able to login with PERFORMANCE GLITCH USER', () => {
  describe(`WHEN I login`, () => {
    before(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: users.performanceGlitchUser.username, password: users.performanceGlitchUser.password });
      loginPage.loginButton.click();
    });
    it('SHOULD navigate to the items page', () => cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html'));
  });
});
