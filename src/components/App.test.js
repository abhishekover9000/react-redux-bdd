import React from "react";
import { shallow, configure } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a connected Wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });

  it("cointains a link to coindesk price page", () => {
    expect(app.find("a").props().href).toEqual(
      "https://www.coindesk.com/price"
    );
  });
});
