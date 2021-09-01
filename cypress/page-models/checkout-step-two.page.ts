export interface ISummaryInfo {
  paymentInfo: string;
  shippingInformation: string;
  subtotalPrice: string;
  totalPrice: string;
}

class CheckoutStepTwo {
  public get quantity() {
    return cy.get('.cart_quantity');
  }

  public get itemName() {
    return cy.get('inventory_item_name');
  }

  public get itemDescription() {
    return cy.get('.inventory_item_desc');
  }

  public get price() {
    return cy.get('.inventory_item_price');
  }

  public get summaryInfo() {
    return cy.get('.summary_info');
  }
}

export const checkoutStepTwo = new CheckoutStepTwo();
