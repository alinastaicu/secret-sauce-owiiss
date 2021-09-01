import * as users from '../data/users';
import { ITEM } from '../interfaces';

import { itemPage } from '../page-models/item.page';
import { loginPage } from '../page-models/login.page';
import { shoppingCartPage } from '../page-models/shopping-cart.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I want to add and remove items to cart for ${user.username}`, () => {
    describe(`WHEN I am adding and removing items`, () => {
      before(() => {
        loginPage.navigate();
        loginPage.fillLoginForm({ username: user.username, password: user.password });
        loginPage.loginButton.click();
      });

      it('SHOULD work as expected', () => {
        itemPage.addItem(ITEM.backpack).click();
        itemPage.addItem(ITEM.testTshirtRed).click();
        shoppingCartPage.shoppingCartBadge.should('contain.text', '2').should('be.visible');

        itemPage.removeItem(ITEM.testTshirtRed).click();
        shoppingCartPage.shoppingCartBadge.should('contain.text', '1').should('be.visible');
      });
    });
  });
}
