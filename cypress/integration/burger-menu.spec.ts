import * as users from '../data/users';
import { ITEM } from '../interfaces';
import { burgerMenu } from '../page-models/burger-menu.page';

import { itemPage } from '../page-models/item.page';
import { loginPage } from '../page-models/login.page';
import { shoppingCartPage } from '../page-models/shopping-cart.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I want to reset the app for the ${user.username}`, () => {
    describe(`WHEN I add item and restart the app`, () => {
      before(() => {
        loginPage.navigate();
        loginPage.fillLoginForm({ username: user.username, password: user.password });
        loginPage.loginButton.click();
      });

      it('SHOULD the shopping card be empty', () => {
        itemPage.addItem(ITEM.boltTshirt).click();
        burgerMenu.menu.click();
        burgerMenu.resetApp.click();
        shoppingCartPage.shoppingCartBadge.should('not.exist');
      });
      it('SHOULD the butten for the item change to add to card', () => {
        itemPage.addItem(ITEM.boltTshirt).contains('Add to cart');
      });
    });
  });
}
