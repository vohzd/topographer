<template lang="html">
  <main class="container-padding flex">
    <section class="layout-select tool-select">
      <h2><img src="~/assets/layouts.png" class="tool-icon"><span class="tool-text">Layouts</span></h2>
      <div class="available-layouts">
        <span v-if="!templates.length">No templates, <nuxt-link to="/layouts/123456">create one?</nuxt-link></span>
      </div>
    </section>
    <section class="page-select tool-select">
      <h2><img src="~/assets/pages.png" class="tool-icon"><span class="tool-text">Pages</span></h2>
      <div class="available-pages">
        <span v-if="!templates.length">No pages, <nuxt-link to="/pages/123456">write one?</nuxt-link></span>
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

<style lang="css">
</style>
