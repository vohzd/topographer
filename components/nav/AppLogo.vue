<template lang="html">
  <span>
    <img src="~/assets/logo.png" class="app-logo"/>
    <span class="app-name">Topographer</span>
  </span>
</template>

<script>
export default {
}
</script>

<style lang="css">

  .app-logo-container {
    text-decoration: none;
    color: white;
    transition: 1s all;
  }

  .app-logo-container:hover {
    opacity: 0.5;
  }

  .app-logo {
    width:64px;
    position: absolute;
  }

  .app-name {
    margin-left:72px;
  }

</style>
