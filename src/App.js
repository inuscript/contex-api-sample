import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const { Provider, Consumer } = React.createContext();

class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div style={{ padding: "1em" }}>
        <h1>Parent</h1>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;
