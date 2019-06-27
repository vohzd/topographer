<template lang="html">
  <section class="container-padding">
    <nuxt-link to="/tests/new">Design a new test</nuxt-link>
    <h3>Existing Tests</h3>
  </section>
</template>

<script>
export default {
  data(){
    return {
      existingTests: []
    }
  }
}
</script>

<style lang="css" scoped>
</style>
