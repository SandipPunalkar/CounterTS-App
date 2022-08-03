import React from "react";
import CounterTypes from "../modules/counterTypes";

interface CounterProps {
  counter: CounterTypes;
  // id: number;
  // value: number;
  //children: React.ReactNode;
  onIncrement: (counter: CounterTypes) => void;
  onDecrement: (counter: CounterTypes) => void;
  onDelete: (counterId: number) => void;
}

function Counter({
  counter,
  onIncrement,
  onDecrement,
  onDelete,
}: CounterProps) {
  const getBadgeClasses = () => {
    let classess = "badge m-2 text-bg-";
    classess += counter.value === 0 ? "warning" : "primary";
    return classess;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };
  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? true : false}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Counter;
