<template lang="html">
  <section class="container-padding">
    <nuxt-link to="/tests/results">See results</nuxt-link>
    <section v-if="group != null">
      <h1>{{ variants[group].tagline }}</h1>
      <button @click="go">{{ variants[group].cta }} </button>
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {

  data(){
    return {
      group: null,
      variants: [
        {
          "tagline": "horatio cornblower",
          "cta": "drink now"
        },
        {
          "tagline": "hairy naval",
          "cta": "easy peasy"
        },
        {
          "tagline": "fuzzy naval",
          "cta": "lets get waisted"
        },
        {
          "tagline": "irish coffee",
          "cta": "drink mofo"
        },
        {
          "tagline": "not a coktail",
          "cta": "drink more"
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      "logConversion"
    ]),
    go(){
      this.logConversion(this.group);
    }
  },
  mounted(){
    this.group = Math.floor(Math.random() * this.variants.length);
  }
}
</script>

<style lang="css">
</style>
