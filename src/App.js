import React, { Component } from "react";
import logo from "./logo.svg";

const CounterContext = React.createContext();

const Child = () => {
  return (
    <CounterContext.Consumer>
      {({ count }) => {
        return (
          <div>
            <h1>Child</h1>
            <span>{count}</span>
          </div>
        );
      }}
    </CounterContext.Consumer>
  );
};

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
      <CounterContext.Provider value={{ count: this.state.count }}>
        <div style={{ padding: "1em" }}>
          <div>
            <h1>Parent</h1>
            <div>{this.state.count}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
          <Child />
        </div>
      </CounterContext.Provider>
    );
  }
}

export default App;
