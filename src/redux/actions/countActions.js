export function increment(team) {
  return { type: "INCREMENT", team };
}

export function decrement(team) {
  return { type: "DECREMENT", team };
}

export function reset() {
  return { type: "RESET" };
}
