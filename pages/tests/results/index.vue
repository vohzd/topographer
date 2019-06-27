<template lang="html">
  <section class="container-padding">
    <h1>resylts</h1>
    <span>
      {{ conversions }}
    </span>
  </section>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "conversions"
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
