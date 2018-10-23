import React from "react";
import { shallow, mount } from "enzyme";

import { Loot } from "./Loot";

describe("Loot", () => {
  const mockFetchbitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchbitcoin };
  let loot = shallow(<Loot {...props} />);

  it("renders properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchbitcoin;
      loot = mount(<Loot {...props} />);
    });

    it("dispatches the fetchBitcoin() method received from props", () => {
      expect(mockFetchbitcoin).toHaveBeenCalled();
    });
  });

  // situation
  describe("when valid bitcoin props in Loot props", () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: { bpi: { USD: { rate: "1,000" } } },
        fetchBitcoin: mockFetchbitcoin
      };
      loot = shallow(<Loot {...props} />);
    });

    it("displays the correct bitcoin value", () => {
      setTimeout(() => {
        expect(loot.find(".bitcoin-value").text()).toEqual(
          "Bitcoin balance: 0.01"
        );
      }, 1000);
    });
  });
});
