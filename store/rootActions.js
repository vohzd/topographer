import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  logConversion({ commit }, group){
    commit("LOG_CONVERSION", group);
  }
};
