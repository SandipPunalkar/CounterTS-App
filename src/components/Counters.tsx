import React, { Component } from "react";
import CounterTypes from "../modules/counterTypes";
import Counter from "./Counter";

interface CountersProps {
  counters: CounterTypes[];
  onReset: () => void;
  onIncrement: (counter: CounterTypes) => void;
  onDelete: (counterId: number) => void;
}

interface CountersState {
  counters: CounterTypes[];
}

class Counters extends React.Component<CountersProps, CountersState> {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
