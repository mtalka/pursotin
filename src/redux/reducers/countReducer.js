const initialState = {
  teams: [
    { team: "purple", total: 0 },
    { team: "pink", total: 0 },
    { team: "blue", total: 0 },
    { team: "green", total: 0 },
    { team: "yellow", total: 0 },
    { team: "orange", total: 0 }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        teams: state.teams.map((item, index) => {
          if (item === action.team) {
            return {
              ...item,
              total: item.total + 1
            };
          }
          return item;
        })
      };
    case "DECREMENT":
      return {
        ...state,
        teams: state.teams.map((item, index) => {
          if (item === action.team) {
            return {
              ...item,
              total: item.total > 0 ? item.total - 1 : item.total
            };
          }
          return item;
        })
      };
    case "RESET":
      return initialState
    default:
      return state;
  }
}
