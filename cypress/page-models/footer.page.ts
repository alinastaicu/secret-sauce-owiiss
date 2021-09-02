class IFooter {
  public get footer() {
    return cy.get('.footer_copy');
  }
}

export const footer = new IFooter();
