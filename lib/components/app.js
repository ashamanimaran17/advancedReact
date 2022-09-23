import React from "react";
/* export const App = () => {
  return <div>Hello world</div>;
};
 */
import { Component } from "react";
class App extends Component {
  state = {
    answer: 32,
  };
  asyncFunc = () => {
    return Promise.resolve(63);
  };
  async componentDidMount() {
    this.setState({ answer: await this.asyncFunc() });
  }
  render() {
    return <div>Hello from class component --{this.state.answer}</div>;
  }
}

export { App };
