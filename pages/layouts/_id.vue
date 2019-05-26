<template lang="html">
  <main class="page-editor">
    
  </main>
</template>

<script>
//import EditorToolbar from "~/components/editor/EditorToolbar.vue";
export default {
  components: {
    //"editor-toolbar": EditorToolbar
  },
  data(){
    return {
      gridSize: [16,16]
    }
  }
}
</script>

<style lang="css">

  .editor {
    width: 100%;
    float: left;
  }

  .editor-viewport {
    width: 100%;
    height: calc(100vh - 128px);
    float: left;
    position: relative;
    overflow-x: hidden;
  }

</style>
