import React, { Component } from "react";
import { connect } from "react-redux";
import { depositBalance, withdrawBalance } from "../actions/balance";

export class Wallet extends Component {
  state = {
    balance: undefined
  };

  updateBalance = event => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    });
  };

  deposit = () => this.props.depositBalance(this.state.balance);
  withdraw = () => this.props.withdrawBalance(this.state.balance);

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="wallet-input" onChange={this.updateBalance} />
        <br />
        <button className="btn-deposit btn" onClick={this.deposit}>
          {" "}
          Deposit{" "}
        </button>
        <button className="btn-withdraw btn" onClick={this.withdraw}>
          {" "}
          Withdraw{" "}
        </button>
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state.balance, bitcoin: state.bitcoin };
  },
  { depositBalance, withdrawBalance }
)(Wallet);
