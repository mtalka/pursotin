import React from "react";
import "./App.scss";
import TeamCard from "./TeamCard";

function App() {
  const teams = ["pink", "purple", "blue", "green", "yellow", "orange"];

  return (
    <div className="App">
      <h1>Pursotin</h1>
      <h3>Just because you think you won doesn't mean you won.</h3>
      <div className="functions">
        <div className="function">Reset</div>
        <div className="function">Undo</div>
      </div>
      {teams.map(c => (
        <TeamCard key={c} team={c} />
      ))}
    </div>
  );
}

export default App;
