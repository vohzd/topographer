<template lang="html">
  <main class="container-padding">
    <section class="layout-select">
      <h1>Layouts</h1>
      <div class="available-layouts">
        <span v-if="!templates.length">No templates, <nuxt-link to="/editor/123456">create one?</nuxt-link></span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      templates: []
    }
  }
}
</script>

<style lang="css" scoped>
</style>
