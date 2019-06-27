import state from "./rootState.js";

export default {
  serverEndpoint: () =>  "http://localhost:1337",
  conversions: (state) => state.conversions 
}
