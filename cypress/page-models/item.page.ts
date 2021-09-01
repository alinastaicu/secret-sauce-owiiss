class ItemPage {
  public get itemName() {
    return cy.get('.inventory_item_name');
  }

  public get itemDescription() {
    return cy.get('.inventory_item_desc');
  }

  public get itemPrice() {
    return cy.get('.inventory_item_price');
  }

  public removeItem(itemType: string) {
    return cy.get(`[data-test="remove-sauce-labs-${itemType}"]`);
  }

  public addItem(itemType: string) {
    return cy.get(`[data-test="add-to-cart-sauce-labs-${itemType}"]`);
  }

  public get intemSort() {
    return cy.get(`[data-test="product_sort_container"]`);
  }

  public get burgerButton() {
    return cy.get('.bm-burger-button');
  }
}

export const itemPage = new ItemPage();
