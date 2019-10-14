<template lang="html">
  <header class="app-header-toolbar">
    <nuxt-link to="/" class="app-logo-container">
      <app-logo />
    </nuxt-link>
    <nuxt-link to="/tests">Tests</nuxt-link>
    <nuxt-link to="/layouts">Layouts</nuxt-link>
    <nuxt-link to="/pages">Pages</nuxt-link>

  </header>
</template>

<script>
import AppLogo from "~/components/nav/AppLogo.vue";

export default {
  components: {
    "app-logo": AppLogo
  }
}
</script>

<style lang="css">

  .app-header-toolbar {
    background: black;
    width: 100%;
    color: white;
    line-height: 64px;
    padding: 0 64px;
  }

</style>
