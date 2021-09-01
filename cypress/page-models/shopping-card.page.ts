class ShoopingCardPage {
  public get shoopingCardBadge() {
    return cy.get('.shopping_cart_badge');
  }

  public get checkoutButton() {
    return cy.get(`[data-test="checkout"]`);
  }

  public removeItem(ItemPage: string) {
    return cy.get(`[data-test="remove-sauce-labs-${ItemPage}"]`);
  }
}

export const shoopingCardPage = new ShoopingCardPage();
