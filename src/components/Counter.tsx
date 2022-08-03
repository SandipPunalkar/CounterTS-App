import React from "react";
import CounterTypes from "../modules/counterTypes";

interface CounterProps {
  counter: CounterTypes;
  // id: number;
  // value: number;
  //children: React.ReactNode;
  onIncrement: (counter: CounterTypes) => void;
  onDelete: (counterId: number) => void;
}

function Counter({ counter, onIncrement, onDelete }: CounterProps) {
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
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
}

export default Counter;
