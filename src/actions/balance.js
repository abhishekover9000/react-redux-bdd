import * as constants from "./constants";

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  };
};

export const withdrawBalance = balance => {
  return {
    type: constants.WITHDRAW_BALANCE,
    balance
  };
};

export const depositBalance = balance => {
  return {
    type: constants.DEPOSIT_BALANCE,
    balance
  };
};
