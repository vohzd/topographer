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


  @font-face {
      font-family: "mono";
      src: url("~assets/fonts/mono.ttf");
      font-weight: normal;
      font-style: normal;
  }


  body {
    font-family: "mono";
  }

  a {
    color: #156881;
    text-decoration: none;
    transition: 0.7s all;
  }

  a:hover {
    color: #26a3c8;
    opacity: 0.7;
  }

  .container-padding {
    padding: 64px;
  }

  .app-container {
    width: 100%;
    float: left;
  }

  .flex {
    display: flex;
  }

  .mt {
    margin-top: 16px;
  }

  .mb {
    margin-bottom: 16px;
  }

  .pad {
    padding: 16px;
  }

  .content-selection {
    background: rgba(0,0,0,0.1);
    width: 100%;
    padding: 32px;
  }

  .content-selection h2 {
    font-size: 32px;
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    position: relative;

  }

  .content-selection-icon {
    width: 48px;
    position: absolute;
  }

  .content-selection-text {
    margin-left: 64px;
    padding-top: 16px;
    height: 64px;
    vertical-align: middle;
  }



</style>
