export interface IUserModel {
  username: string;
  password: string;
}

export const standardUser: IUserModel = {
  username: 'standard_user',
  password: 'secret_sauce',
};

export const lockedOutUser: IUserModel = {
  username: 'locked_out_user',
  password: 'secret_sauce',
};

export const problemUser: IUserModel = {
  username: 'problem_user',
  password: 'secret_sauce',
};

export const performanceGlitchUser: IUserModel = {
  username: 'performance_glitch_user',
  password: 'secret_sauce',
};

const userKeyMap = {
  standard: standardUser,
  glitchy: performanceGlitchUser,
  problem: problemUser,
};

export const allUsersIWantToTest = (Cypress.env('users') || '').split(',').map((k) => userKeyMap[k.trim()]);
