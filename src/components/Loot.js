import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  render() {
    const bitcoinValue = this.props.bitcoin.bpi
      ? this.props.balance /
        parseInt(this.props.bitcoin.bpi.USD.rate.replace(/,/g, ""))
      : "";

    return (
      <div>
        {" "}
        <h3 className="bitcoin-value">
          {" "}
          Bitcoin balance: {bitcoinValue}{" "}
        </h3>{" "}
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state.balance, bitcoin: state.bitcoin };
  },
  { fetchBitcoin }
)(Loot);
