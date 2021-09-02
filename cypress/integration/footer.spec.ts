import * as users from '../data/users';
import { footer } from '../page-models/footer.page';

import { loginPage } from '../page-models/login.page';

for (const user of users.allUsersIWantToTest) {
  describe(`GIVEN I want to read Terms of Service and Privacy Policy for ${user.username}`, () => {
    describe(`WHEN I click on the Terms of Service link`, () => {
      before(() => {
        loginPage.navigate();
        loginPage.fillLoginForm({ username: user.username, password: user.password });
        loginPage.loginButton.click();
        footer.footer.contains('Terms of Service').click();
      });

      it('SHOULD navigate to Terms of Service', () => {
        cy.url().should('include', '/terms');
      });

      describe('WHEN I click on Privacy Policy link', () => {
        before(() => {
          loginPage.navigate();
          loginPage.fillLoginForm({ username: user.username, password: user.password });
          loginPage.loginButton.click();
          footer.footer.contains('Privacy Policy').click();
        });

        it('SHOULD redirect me to the privacy page', () => cy.url().should('include', '/privacy'));
      });
    });
  });
}
