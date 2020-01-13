import React from "react";
import "./App.scss";
import TeamCard from "./TeamCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as countActions from "./redux/actions/countActions";

function App(props) {
  const teams = ["pink", "purple", "blue", "green", "yellow", "orange"];

  function reset() {
    props.actions.reset();
  }

  return (
    <div className="App">
      <h1>Pursotin</h1>
      <h3>Just because you think you won doesn't mean you won.</h3>
      <div className="functions">
        <div className="function" onClick={reset}>Reset</div>
      </div>
      {teams.map(c => (
        <TeamCard key={c} teamColor={c} />
      ))}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);