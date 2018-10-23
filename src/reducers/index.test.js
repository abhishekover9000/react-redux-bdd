import rootReducer from "./index";

describe("rootReducer", () => {
  it("initializes default state", () => {
    expect(rootReducer({}, {})).toEqual({
      bitcoin: {},
      balance: 0
    });
  });
});
