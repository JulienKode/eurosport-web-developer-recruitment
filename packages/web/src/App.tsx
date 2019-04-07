import React, { Component } from "react";
import { PlayersContainer } from "./playersContext/primaries/Players.container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayersContainer />
      </div>
    );
  }
}

export default App;
