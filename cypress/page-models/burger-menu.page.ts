class BurgerMenu {
  public get menu() {
    return cy.get('.bm-burger-button');
  }

  public get resetApp() {
    return cy.get('#reset_sidebar_link');
  }

  public get logout() {
    return cy.get('#logout_sidebar_link');
  }
}

export const burgerMenu = new BurgerMenu();
