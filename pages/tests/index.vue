<template lang="html">
  <section class="container-padding">
    <nuxt-link to="/tests/new">Design a new test</nuxt-link>
    <h3>Existing Tests</h3>
    <section>
      {{ experiments }}
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
  },
  mounted(){
    console.log(this.experiments)
  }
}
</script>

<style lang="css" scoped>
</style>
