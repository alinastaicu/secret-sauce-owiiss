class SortItem {
  public get sortItem() {
    return cy.get('[data-test="product_sort_container"]');
  }
}

export const sortItem = new SortItem();
