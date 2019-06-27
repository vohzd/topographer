import state from "./rootState.js";

export default {
  experiments: () => state.experiments,
  serverEndpoint: () =>  "http://localhost:1337",
  conversions: (state) => state.conversions
}
