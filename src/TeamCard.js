import React from "react";
import { connect } from "react-redux";
import QuestionCounter, { getTeamByName } from "./QuestionCounter";

function TeamCard(props) {
  const cardClass = `team-card ${props.teamColor}`;

  const colors = ["pink", "purple", "blue", "green", "yellow", "orange"];

  return (
    <div className={cardClass}>
      <div className="team-name">{props.teamColor}</div>
      <div className="counter-wrapper">
        {colors.map(c => (
          <QuestionCounter key={c} color={c} team={props.teamColor} />
        ))}
      </div>
      <div className="total">{props.team.total}</div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const team = getTeamByName(state.counts.teams, ownProps.teamColor);
  return {
    team
  };
}

export default connect(mapStateToProps)(TeamCard)
