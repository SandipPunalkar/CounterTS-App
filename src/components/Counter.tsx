import React, { Component } from "react";

interface CounterProps {
  value: number;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: props.value };
  }
  private handleIncrement = (id: number) => {
    this.setState({ count: this.state.count + 1 });
    console.log(id);
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(10)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  private getBadgeClasses() {
    let classess = "badge m-2 text-bg-";
    classess += this.state.count === 0 ? "warning" : "primary";
    return classess;
  }

  private formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
