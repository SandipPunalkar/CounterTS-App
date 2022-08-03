import React, { Component } from "react";
import CounterTypes from "../modules/counterTypes";

interface CounterProps {
  counter: CounterTypes;
  // id: number;
  // value: number;
  //children: React.ReactNode;
  onDelete: (counterId: number) => void;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: props.counter.value };
  }
  private handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
