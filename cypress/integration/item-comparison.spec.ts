import * as users from '../data/users';
import { itemDetails } from '../page-models/item-details.page';
import { itemPage } from '../page-models/item.page';
import { loginPage } from '../page-models/login.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I am able to see the details for user "${user.username}"`, () => {
    beforeEach(() => {
      loginPage.navigate();
      loginPage.fillLoginForm({ username: user.username, password: user.password });
      loginPage.loginButton.click();
    });

    it('SHOULD the image for the first item be the same as on the item detail page', () => {
      itemPage.image
        .eq(0)
        .invoke('attr', 'src')
        .then((source: string) => {
          cy.log(source);
          itemPage.image.eq(0).click();
          itemDetails.detailsImage.first().should('have.attr', 'src', source);
          itemDetails.details.should('contain.text', 'Sauce Labs Backpack');
          itemDetails.details.should(
            'contain.text',
            'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
          );
          itemDetails.details.should('contain.text', '$29.99');
        });
    });

    it('SHOULD the image for the second item be the same as on the item detail page', () => {
      itemPage.image
        .eq(1)
        .invoke('attr', 'src')
        .then((source: string) => {
          cy.log(source);
          itemPage.image.eq(1).click();
          itemDetails.detailsImage.first().should('have.attr', 'src', source);
          itemDetails.details.should('contain.text', 'Sauce Labs Bike Light');
          itemDetails.details.should(
            'contain.text',
            `A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.`,
          );
          itemDetails.details.should('contain.text', '$9.99');
        });
    });
  });
}
