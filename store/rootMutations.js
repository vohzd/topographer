import state from "./rootState.js";

export default {
  LOG_CONVERSION(state, group){
    state.conversions[group]++;
  }
};
