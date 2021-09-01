import * as users from '../../data/users';
import { ITEM } from '../../interfaces';

import { itemPage } from '../../page-models/item.page';
import { loginPage } from '../../page-models/login.page';
import { shoppingCartPage } from '../../page-models/shopping-cart.page';

describe('GIVEN I am able to check the shoopping cart', () => {
  before(() => {
    loginPage.navigate();
    loginPage.fillLoginForm({ username: users.standardUser.username, password: users.standardUser.password });
    loginPage.loginButton.click();
    itemPage.addItem(ITEM.fleeceJacket).click();
  });

  describe(`WHEN I check the shopping cart`, () => {
    before(() => {
      shoppingCartPage.shoppingCartBadge.click();
    });

    it('SHOULD see item name', () => shoppingCartPage.itemName.should('contain.text', 'Sauce Labs Fleece Jacket').should('be.visible'));
    it('SHOULD see item description', () =>
      shoppingCartPage.itemDescription
        .should(
          'contain.text',
          "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
        )
        .should('be.visible'));
    it('SHOULD see item price', () => shoppingCartPage.itemPrice.should('contain.text', '$49.99').should('be.visible'));
    it('SHOULD see item quantity', () => shoppingCartPage.itemQuantity.should('contain.text', '1').should('be.visible'));
  });
});
