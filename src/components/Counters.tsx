import React from "react";
import CounterTypes from "../modules/counterTypes";
import Counter from "./Counter";

interface CountersProps {
  counters: CounterTypes[];
  onReset: () => void;
  onIncrement: (counter: CounterTypes) => void;
  onDecrement: (counter: CounterTypes) => void;
  onDelete: (counterId: number) => void;
}

function Counters({
  counters,
  onReset,
  onIncrement,
  onDecrement,
  onDelete,
}: CountersProps) {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Counters;
