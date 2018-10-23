import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../actions/constants";

describe("balanceReducer ", () => {
  describe("when initializing", () => {
    const balance = 10;
    it("sets a balance", () => {
      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe("when reinitiaizing", () => {
      it("reads a balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });
  it("deposits into the balance", () => {
    const balance = 10;
    const initialState = 50;

    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT_BALANCE, balance })
    ).toEqual(balance + initialState);
  });

  it("withdraws from the balance", () => {
    const withdrawal = 10;
    const initialState = 50;

    expect(
      balanceReducer(initialState, {
        type: constants.WITHDRAW_BALANCE,
        balance: withdrawal
      })
    ).toEqual(initialState - withdrawal);
  });
});
