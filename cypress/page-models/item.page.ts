class ItemPage {
  public get image() {
    return cy.get('img.inventory_item_img');
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

  public removeItem(itemType: string) {
    return cy.get(`[data-test="remove-${itemType}"]`);
  }

  public addItem(itemType: string) {
    return cy.get(`[data-test="add-to-cart-${itemType}"]`);
  }
}

export const itemPage = new ItemPage();
