import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    const { count } = this.setState;
    this.setState({
      count: count + 1,
    });
  };

  decrement = () => {
    const { count } = this.setState;
    this.setState({
      count: count - 1,
    });
  };

  render() {
    const { render } = this.props;
    const { count } = this.state;

    return (
      <div>
        {render({
          increment: this.increment,
          decrement: this.decrement,
          count,
        })}
      </div>
    );
  }
}

export default Counter;