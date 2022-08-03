import React, { Component } from "react";
import { JsxElement } from "typescript";

interface CounterProps {}

interface CounterState {
  count: number;
  tags: string[];
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: 0, tags: ["tag1", "tag2", "tag3"] };
  }
  private renderTags() {
    if (this.state.tags.length === 0) return <p>Ther are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && <p>Please create a new Tags!</p>}
        {this.renderTags()}
      </div>
    );
  }
  private getBadgeClasses() {
    let classess = "badge m-2 badge-";
    classess += this.state.count === 0 ? "warning" : "primary";
    return classess;
  }

  private formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
