<template lang="html">
  <section class="container-padding">
    <div v-if="experiments">
      <div class="" v-for="experiment in experiments">
        <span>{{ experiment._id }}</span>
        <span>{{ experiment.name  }}</span>
      </div>

    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "experiments"
    ])
  },
  mounted(){
    /*
    if (this.experiments){
      console.log(this.experiments)
      //this.experiment = this.experiments[window.location.pathname.split("/")[2]];
    }*/
    console.log(this.experiments)
  }
}
</script>

<style lang="css" scoped>
</style>
