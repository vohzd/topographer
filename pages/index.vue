<template lang="html">
  <main class="container-padding flex">
    <!--
    <section class="layout-select tool-select">
      <h2><img src="~/assets/layouts.png" class="tool-icon"><span class="tool-text">Layouts</span></h2>
      <div class="available-layouts">
        <span v-if="!templates.length">No templates, <nuxt-link to="/layouts/123456">create one?</nuxt-link></span>
      </div>
    </section>-->
    <section class="content-selection">
      <h2><img src="~/assets/pages.png" class="content-selection-icon"><span class="content-selection-text">Pages</span></h2>
      <div class="available-pages">
        <div class="available-page mt">
          > <nuxt-link to="/pages/1" class="page-name">About us</nuxt-link>
          <span class="version-number">v2</span>
          <time class="last-edited-time">2hrs ago</time>
        </div>
        <div class="available-page mt">
          > <nuxt-link to="/pages/2" class="page-name">Contact Me</nuxt-link>
          <span class="version-number">v5</span>
          <time class="last-edited-time">3 weeks ago</time>
        </div>
        <div v-if="!templates.length" class="mt">
          <nuxt-link to="/pages/new"><button class="new-page-button">Create new</button></nuxt-link>
        </div>
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

  .page-name {
    min-width: 128px;
    display: inline-block;
  }

  .version-number {
    font-size: 12px;
    opacity: 0.8;
  }

  .last-edited-time {
    font-size: 9px;
    opacity: 0.6;
    letter-spacing: 2px;
  }

  .new-page-button {
    outline: none;
    background: rgba(0,0,0,0.1);
    padding: 16px;
    border: none;
    font-family: "mono";
  }
  .new-page-button:hover {
    cursor: pointer;
  }

</style>
