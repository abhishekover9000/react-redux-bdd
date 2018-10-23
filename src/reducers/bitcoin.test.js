import bitcoinReducer from "./bitcoin";
import { FETCH_BITCOIN } from "../actions/constants";

describe("bitcoinReducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };
  it("gets and sets bitcoin data", () => {
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })
    ).toEqual(bitcoinData);
  });
});
