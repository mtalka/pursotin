import React from "react";
import QuestionCounter from "./QuestionCounter";

function TeamCard(props) {
  let count = 0;
  const cardClass = `team-card ${props.team}`;

  const colors = ["pink", "purple", "blue", "green", "yellow", "orange"];

  return (
    <div className={cardClass}>
      <div className="team-name">{props.team}</div>
      <div className="counter-wrapper">
        {colors.map(c => (
          <QuestionCounter key={c} color={c} team={props.team} />
        ))}
      </div>
      <div className="total">{count}</div>
    </div>
  );
}

export default TeamCard;
