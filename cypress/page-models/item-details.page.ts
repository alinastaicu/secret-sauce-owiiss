class ItemDetails {
  public get details() {
    return cy.get('.inventory_details_container');
  }

  public get detailsImage() {
    return cy.get('img.inventory_details_img');
  }
}

export const itemDetails = new ItemDetails();
