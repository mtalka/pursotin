import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as countActions from "./redux/actions/countActions";

function QuestionCounter(props) {
  function increment() {
    console.log(props.team);
    props.actions.increment(props.team);
  }

  const countClass = `count ${props.color}`;

  return (
    <div className="counter" onClick={increment}>
      <div className={countClass}>{props.team.total}</div>
    </div>
  );
}

function getTeamByName(teams, teamName) {
  const team = teams.find(t => t.team === teamName);
  return team;
}

function mapStateToProps(state, ownProps) {
  const team = getTeamByName(state.counts.teams, ownProps.team);
  debugger;
  return {
    team
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCounter);
