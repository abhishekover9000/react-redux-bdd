import React, { Component } from "react";
import "./App.css";
import Wallet from "./Wallet";
import Loot from "./Loot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Redux Test Wallet </h2>
        <br />
        <Wallet />
        <hr />
        <Loot />
        <br />
        <div>
          {" "}
          Powered By{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.coindesk.com/price"
          >
            {" "}
            CoinDesk
          </a>{" "}
        </div>
      </div>
    );
  }
}

export default App;
