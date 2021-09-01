class ShoppingCartPage {
  public get shoppingCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  public get checkoutButton() {
    return cy.get(`[data-test="checkout"]`);
  }

  public get itemQuantity() {
    return cy.get('.cart_quantity');
  }

  public get itemName() {
    return cy.get('.inventory_item_name');
  }

  public get itemDescription() {
    return cy.get('.inventory_item_desc');
  }

  public get itemPrice() {
    return cy.get('.inventory_item_price');
  }

  public removeItem(ItemPage: string) {
    return cy.get(`[data-test="remove-sauce-labs-${ItemPage}"]`);
  }
}

export const shoppingCartPage = new ShoppingCartPage();
