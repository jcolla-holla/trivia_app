import axios from "axios";

// To avoid CORS error, use proxy server https://cors-anywhere.herokuapp.com/, which is a simple out of the box proxy server.  FYI I would never use this for a real production app, would set up own proxy server.  This is just a quick and dirty option that works.

// Pros: out of the box, simple
// Cons: latency is somewhat high, could app sluggish feel if not managed well or more expensive operations/API calls.  Ours of 10 questions is fairly inexpensive so shouldn't be too much of an issue
export const fetchQuestions = () => {
  return axios.get(
    "https://cors-anywhere.herokuapp.com/https://opentdb.com/api.php?amount=10"
  );
};
    