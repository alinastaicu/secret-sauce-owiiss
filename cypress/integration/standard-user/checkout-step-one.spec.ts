import * as users from '../../data/users';
import { ITEM } from '../../interfaces';
import { checkoutStepOne } from '../../page-models/checkout-step-one.page';

import { itemPage } from '../../page-models/item.page';
import { loginPage } from '../../page-models/login.page';
import { shoppingCartPage } from '../../page-models/shopping-cart.page';

describe('GIVEN I am able to fill the checkout form', () => {
  before(() => {
    loginPage.navigate();
    loginPage.fillLoginForm({ username: users.standardUser.username, password: users.standardUser.password });
    loginPage.loginButton.click();
    itemPage.addItem(ITEM.boltTshirt).click();
    shoppingCartPage.shoppingCartBadge.click();
    shoppingCartPage.checkoutButton.click();
  });

  describe(`WHEN I checkout step one`, () => {
    before(() => {
      checkoutStepOne.fillCheckoutStepOne({ firstName: 'Max', lastName: 'Pecu', postalCode: '80636' });
      checkoutStepOne.continueButton.click();
    });

    it('SHOULD navigate to the checkout step one page', () => cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-two.html'));
  });
});
