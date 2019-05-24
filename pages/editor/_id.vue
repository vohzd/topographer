<template lang="html">
  <main class="editor">
    <editor-toolbar />
    <div class="editor-viewport">
      <vue-draggable-resizable parent=".editor-viewport">
        <p>Grid 20x20 starting from the top-left corner</p>
      </vue-draggable-resizable>
    </div>
  </main>
</template>

<script>
import EditorToolbar from "~/components/editor/EditorToolbar.vue";
export default {
  components: {
    "editor-toolbar": EditorToolbar
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
