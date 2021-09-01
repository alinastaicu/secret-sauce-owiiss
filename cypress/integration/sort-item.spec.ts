import * as users from '../data/users';
import { itemPage } from '../page-models/item.page';

import { loginPage } from '../page-models/login.page';
import { sortItem } from '../page-models/sort-item.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I want sort the items for ${user.username}`, () => {
    describe(`WHEN I sorting by price(low to high)`, () => {
      before(() => {
        loginPage.navigate();
        loginPage.fillLoginForm({ username: user.username, password: user.password });
        loginPage.loginButton.click();
        sortItem.sortItem.select('Price (low to high)');
      });

      it('SHOULD see the first item has the lower price', () => {
        itemPage.itemPrice.eq(0).should('contain.text', '$7.99').should('be.visible');
      });
      it('SHOULD see the price for the second item is $9.99', () => {
        itemPage.itemPrice.eq(1).should('contain.text', '$9.99').should('be.visible');
      });
      it('SHOULD see the price for the third item is $15.99', () => {
        itemPage.itemPrice.eq(2).should('contain.text', '$15.99').should('be.visible');
      });

      it('SHOULD see tthe price of the last item iss $$49.99', () => {
        itemPage.itemPrice.eq(5).should('contain.text', '$49.99').should('be.visible');
      });
    });
  });
}
