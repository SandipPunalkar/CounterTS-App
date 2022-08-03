import React from "react";

import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <NavBar items={1} />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
