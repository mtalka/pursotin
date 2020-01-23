import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as countActions from "./redux/actions/countActions";

function QuestionCounter(props) {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    props.actions.increment(props.team);
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
      props.actions.decrement(props.team);
    }
  }

  function Count() {
    if (count === 0) {
      return null;
    }
    return <div>{count}</div>
  }

  function Minus() {
    if (count === 0) {
      return null;
    }
    return <div>minus</div>
  }

  useEffect(() => {
    if (props.team.total === 0) {
      setCount(0)
    }
  }, [props.team.total]);

  const countClass = `count ${props.color}`;

  return (
    <div className="controls">
      <div className={countClass} onClick={increment}><Count /></div>
      <div className="decrement" onClick={decrement}><Minus /></div>
    </div>
  );
}

export function getTeamByName(teams, teamName) {
  const team = teams.find(t => t.team === teamName);
  return team;
}

function mapStateToProps(state, ownProps) {
  const team = getTeamByName(state.counts.teams, ownProps.team);
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
