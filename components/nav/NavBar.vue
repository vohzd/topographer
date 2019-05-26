<template lang="html">
  <header class="app-header-toolbar">
    <app-logo />
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
