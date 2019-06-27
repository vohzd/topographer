<template lang="html">
  <section class="container-padding">
    <nuxt-link to="/tests/new">Design a new test</nuxt-link>
    <h3>Existing Tests</h3>
    <section class="experiment-wrapper">
      <nuxt-link :to="`/tests/${experiment._id}`" v-for="experiment in experiments" class="experiment pad mb">
        <span>{{ experiment._id }}</span>
        <span>{{ experiment.name }}</span>
      </nuxt-link>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "experiments"
    ])
  }
}
</script>

<style lang="css">

  .experiment {
    border: 1px solid rgba(0,0,0,0.6);
    width:100%;
    display:inline-block;
  }

</style>
