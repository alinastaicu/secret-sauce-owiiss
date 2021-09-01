export interface ICheckoutStepOne {
  firstName: string;
  lastName: string;
  postalCode: string;
}

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

  public fillCheckoutStepOne(data: ICheckoutStepOne) {
    this.firstName.type(data.firstName);
    this.lastName.type(data.lastName);
    this.postalCode.type(data.postalCode);
  }
}

export const checkoutStepOne = new CheckoutStepOne();
