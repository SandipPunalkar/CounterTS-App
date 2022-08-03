import React, { Component } from "react";
import Counter from "./Counter";

interface CountersProps {}
type CounterTypes = {
  id: number;
  value: number;
};
interface CountersState {
  counters: CounterTypes[];
}

class Counters extends React.Component<CountersProps, CountersState> {
  constructor(props: CountersProps) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
