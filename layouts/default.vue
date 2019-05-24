<template lang="html">
  <div class="app-container">
    <nav-bar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/nav/NavBar.vue";
export default {
  components: {
    "nav-bar": NavBar
  }
}
</script>

<style lang="css">
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

  body {
    font-family: monospace;
  }
  a {
    color: #532a55;
  }
  .container-padding {
    padding: 64px;
  }

  .app-container {
    width: 100%;
    float: left;
  }

</style>
