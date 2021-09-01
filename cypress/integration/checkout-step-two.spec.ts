import * as users from '../data/users';
import { ITEM } from '../interfaces';
import { checkoutStepOne } from '../page-models/checkout-step-one.page';
import { checkoutStepTwo } from '../page-models/checkout-step-two.page';

import { itemPage } from '../page-models/item.page';
import { loginPage } from '../page-models/login.page';
import { shoppingCartPage } from '../page-models/shopping-cart.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I see the overview page ${user.username}`, () => {
    before(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: user.username, password: user.password });
      loginPage.loginButton.click();
      itemPage.addItem(ITEM.boltTshirt).click();
      shoppingCartPage.shoppingCartBadge.click();
      shoppingCartPage.checkoutButton.click();
      checkoutStepOne.fillCheckoutStepOne({ firstName: 'Max', lastName: 'Pecu', postalCode: '80636' });
      checkoutStepOne.continueButton.click();
    });

    describe(`WHEN I see the summary page`, () => {
      it('SHOULD see payment info', () => checkoutStepTwo.summaryInfo.should('contain.text', 'SauceCard #31337').should('be.visible'));
      it('SHOULD see shipping info', () => checkoutStepTwo.summaryInfo.should('contain.text', 'FREE PONY EXPRESS DELIVERY!').should('be.visible'));
      it('SHOULD see subtotal info', () => checkoutStepTwo.summaryInfo.should('contain.text', '$15.99').should('be.visible'));
      it('SHOULD see tax info', () => checkoutStepTwo.summaryInfo.should('contain.text', '$1.28').should('be.visible'));
      it('SHOULD see total price info', () => checkoutStepTwo.summaryInfo.should('contain.text', '$17.27').should('be.visible'));
    });
  });
}
