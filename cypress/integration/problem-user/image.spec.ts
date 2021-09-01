import * as users from '../../data/users';
import { itemPage } from '../../page-models/item.page';

import { loginPage } from '../../page-models/login.page';

describe('GIVEN I am able to see the correct item image', () => {
  before(() => {
    loginPage.navigate();
    loginPage.fillLoginForm({ username: users.problemUser.username, password: users.problemUser.password });
    loginPage.loginButton.click();
  });

  it('SHOULD see item image', () => itemPage.image.should('have.attr', 'img', '/static/media/sl-404.168b1cce.jpgf'));
});
