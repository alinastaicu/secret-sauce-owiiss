import * as users from '../../data/users';
import { ITEM } from '../../interfaces';
import { checkoutComplete } from '../../page-models/checkout-complete.page';
import { checkoutStepOne } from '../../page-models/checkout-step-one.page';
import { checkoutStepTwo } from '../../page-models/checkout-step-two.page';

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
    checkoutStepOne.fillCheckoutStepOne({ firstName: 'Max', lastName: 'Pecu', postalCode: '80636' });
    checkoutStepOne.continueButton.click();
  });

  describe(`WHEN I click finish button`, () => {
    before(() => {
      checkoutStepTwo.finish.click();
    });

    it('SHOULD navigate to the thank you page', () => cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html'));
    it('SHOULD see the header', () => checkoutComplete.header.should('contain.text', 'THANK YOU FOR YOUR ORDER').should('be.visible'));
    it('SHOULD see the subheader', () =>
      checkoutComplete.text
        .should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        .should('be.visible'));
  });
});
