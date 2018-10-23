import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const mockDepositBalance = jest.fn();
  const mockWithdrawBalance = jest.fn();
  // bind a jest function to wallet props
  const props = {
    balance: 20,
    depositBalance: mockDepositBalance,
    withdrawBalance: mockWithdrawBalance
  };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });

  it("creates an input to deposit or withdraw from balance", () => {
    expect(wallet.find(".wallet-input").exists()).toEqual(true);
  });

  describe("when user types into wallet input", () => {
    const userBalance = 25;

    beforeEach(() => {
      wallet
        .find(".wallet-input")
        .simulate("change", { target: { value: userBalance } });
    });

    it("updates local wallet balance in state and converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("and the user wants to make a deposit", () => {
      beforeEach(() => wallet.find(".btn-deposit").simulate("click"));

      it("dispatches the deposit it receives from props with the local balance", () => {
        expect(mockDepositBalance).toHaveBeenCalledWith(
          parseInt(userBalance, 10)
        );
      });
    });

    describe("and the user wants to make a withdrawal", () => {
      beforeEach(() => wallet.find(".btn-withdraw").simulate("click"));

      it("dispatches the withdrawal it receives from props with the local balance", () => {
        expect(mockWithdrawBalance).toHaveBeenCalledWith(
          parseInt(userBalance, 10)
        );
      });
    });
  });
});
