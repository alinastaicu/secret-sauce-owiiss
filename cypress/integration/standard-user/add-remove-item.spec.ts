import * as users from '../../data/users';
import { ITEM } from '../../interfaces';

import { itemPage } from '../../page-models/item.page';
import { loginPage } from '../../page-models/login.page';
import { shoppingCartPage } from '../../page-models/shopping-cart.page';

// Cypress.Cookies.defaults({
//   preserve: 'session-username',
// });

describe('GIVEN I am able to add or remove a item', () => {
  before(() => {
    loginPage.navigate();
    loginPage.fillLoginForm({ username: users.standardUser.username, password: users.standardUser.password });
    loginPage.loginButton.click();
  });

  describe(`WHEN I adding and removing items`, () => {
    it('WHEN adding 2 items SHOULD see in the shopping cart badge the number of the items', () => {
      itemPage.addItem(ITEM.backpack).click();
      itemPage.addItem(ITEM.testTshirtRed).click();
      shoppingCartPage.shoppingCartBadge.should('contain.text', '2').should('be.visible');
      cy.pause();
    });

    it('WHEN removing 1 item SHOULD see 1 item in the cart', () => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: users.standardUser.username, password: users.standardUser.password });
      loginPage.loginButton.click();

      itemPage.addItem(ITEM.backpack).click();
      itemPage.addItem(ITEM.testTshirtRed).click();
      itemPage.removeItem(ITEM.testTshirtRed).click();

      shoppingCartPage.shoppingCartBadge.should('contain.text', '1').should('be.visible');
    });
  });
});
