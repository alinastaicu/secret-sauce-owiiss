import * as users from '../data/users';
import { itemPage } from '../page-models/item.page';
import { loginPage } from '../page-models/login.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I am able to see the details for user "${user.username}"`, () => {
    beforeEach(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: user.username, password: user.password });
      loginPage.loginButton.click();
    });

    it('SHOULD the image for the first item', () => {
      itemPage.image
        .eq(0)
        .invoke('attr', 'src')
        .then((source: string) => {
          cy.log(source);
          itemPage.image.eq(0).click();
          cy.get('img.inventory_details_img').first().should('have.attr', 'src', source);
        });
    });

    it('SHOULD the image for the second item', () => {
      itemPage.image
        .eq(1)
        .invoke('attr', 'src')
        .then((source: string) => {
          cy.log(source);
          itemPage.image.eq(1).click();
          cy.get('img.inventory_details_img').first().should('have.attr', 'src', source);
        });
    });
  });
}
