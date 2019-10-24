<template lang="html">
  <main class="page-editor container-padding about-me">

    <div>
      <label>Font</label>
      <select v-model="selectedFont">
        <option v-for="font in availableFonts" :value="font.value">{{ font.name }}</option>
      </select>
    </div>

    <div contenteditable class="editor-canvas mt">
      <h1>Hello</h1>
      <p class="mt">Lorem ipsum dolor amet ethical kickstarter sartorial cloud bread pitchfork blue bottle vaporware migas. Keytar poutine put a bird on it glossier. Beard pinterest vape irony williamsburg lomo flannel man bun fixie quinoa gentrify pour-over succulents mustache vegan.</p>
      <h2 class="mt">Second Header</h2>
      <p class="mt">Lorem ipsum dolor amet ethical kickstarter sartorial cloud bread pitchfork blue bottle vaporware migas. Keytar poutine put a bird on it glossier. Beard pinterest vape irony williamsburg lomo flannel man bun fixie quinoa gentrify pour-over succulents mustache vegan.</p>
    </div>


    <style>
      :root {
        --font-family: {{ selectedFont }};
      }
    </style>
<!--
    <editor-content :editor="editor" class="editor-canvas"/>

    <Container>
      <Draggable class="draggable-item" :key="1">
        <h2>About Me</h2>
      </Draggable>
      <Draggable class="draggable-item" :key="2">
        <p>Lorem ipsum dolor amet hammock consequat taiyaki freegan. Tote bag yuccie seitan gastropub dreamcatcher, eiusmod af hoodie pariatur pabst.</p>
      </Draggable>
      <Draggable class="draggable-item" :key="3">
        <p>Prism officia kale chips, live-edge humblebrag man bun schlitz distillery tote bag stumptown quinoa freegan vegan iceland kogi. </p>
      </Draggable>
      <Draggable class="draggable-item" :key="4">
        <p>Street art poke occupy skateboard pabst butcher everyday carry sunt kombucha leggings irony stumptown organic sed hexagon. </p>
      </Draggable>
    </Container>-->

  </main>
</template>


<script>
import fonts from "~/assets/fonts/fonts-definition.js";
import { Container, Draggable } from "vue-smooth-dnd";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";

export default {
  components: { Container, Draggable, EditorContent, EditorMenuBar },
  data(){
    return {
      editor: null,
      selectedFont: "monospace",
      availableFonts: []
    }
  },
  mounted(){
    /*
    this.editor = new Editor({
      content: `
        <h1>Header</h1>
        <p>Lorem ipsum dolor amet ethical kickstarter sartorial cloud bread pitchfork blue bottle vaporware migas. Keytar poutine put a bird on it glossier. Beard pinterest vape irony williamsburg lomo flannel man bun fixie quinoa gentrify pour-over succulents mustache vegan.</p>
        `
    });*/
    this.availableFonts = fonts;
  },
  beforeDestroy() {
    //this.editor.destroy()
  }
};
</script>

<style lang="css">



  .editor-canvas {
    padding: 16px;
    background: rgba(0,0,0,0.01);
    border-radius: 2px;
    box-shadow: inset 0px 0px 48px rgba(0,0,0,0.05);
    outline: none;
    font-family: var(--font-family);
  }

  .editor-canvas h1 {
    font-size: 32px;
    font-weight: 700;
  }

  .editor-canvas h2 {
    font-size: 23px;
    font-weight: 700;
  }
</style>
