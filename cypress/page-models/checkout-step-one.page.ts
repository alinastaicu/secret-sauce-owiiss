class CheckoutStepOne {
  public get firstName() {
    return cy.get(`[data-test="firstName"]`);
  }

  public get lastName() {
    return cy.get(`[data-test="lastName"]`);
  }

  public get postalCode() {
    return cy.get(`[data-test="postalCode"]`);
  }

  public get continueButton() {
    return cy.get(`[data-test="continue"]`);
  }
}

export const checkoutStepOne = new CheckoutStepOne();
