import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  logConversion({ commit }, group){
    commit("LOG_CONVERSION", group);
  },
  saveExperiment({ commit }, variants){
    console.log("hello");
    commit("SAVE_EXPERIMENT", variants)
    console.log("EXPERIMENT SAVED");
    console.log(variants)
  }
};
