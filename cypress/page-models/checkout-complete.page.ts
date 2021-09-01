class CheckoutComplete {
  public get header() {
    return cy.get('.complete-header');
  }

  public get text() {
    return cy.get('.complete-text');
  }

  public get backToProductsButton() {
    return cy.get(`[data-test="back-to-products"]`);
  }
}

export const checkoutComplete = new CheckoutComplete();
