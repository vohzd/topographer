<template lang="html">
  <main class="page-editor container-padding about-me">

    <select>
      <option>hello</option>
    </select>
    <div class="" contenteditable class="editor-canvas">
      <h1>Hello</h1>
      <p class="mt">Lorem ipsum dolor amet ethical kickstarter sartorial cloud bread pitchfork blue bottle vaporware migas. Keytar poutine put a bird on it glossier. Beard pinterest vape irony williamsburg lomo flannel man bun fixie quinoa gentrify pour-over succulents mustache vegan.</p>
      <h2 class="mt">Second Header</h2>
      <p class="mt">Lorem ipsum dolor amet ethical kickstarter sartorial cloud bread pitchfork blue bottle vaporware migas. Keytar poutine put a bird on it glossier. Beard pinterest vape irony williamsburg lomo flannel man bun fixie quinoa gentrify pour-over succulents mustache vegan.</p>
    </div>
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
import { Container, Draggable } from "vue-smooth-dnd";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";

export default {
  components: { Container, Draggable, EditorContent, EditorMenuBar },
  data(){
    return {
      editor: null
    }
  },
  mounted(){
    this.editor = new Editor({
      content: `
        <h1>Header</h1>
        <p>Lorem ipsum dolor amet ethical kickstarter sartorial cloud bread pitchfork blue bottle vaporware migas. Keytar poutine put a bird on it glossier. Beard pinterest vape irony williamsburg lomo flannel man bun fixie quinoa gentrify pour-over succulents mustache vegan.</p>
        `
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  }
};
</script>

<style lang="css">

  .draggable-item:hover {
    background: rgba(0,0,0,0.1);
    cursor:pointer;
    opacity: 0.6;
  }


  .editor-canvas {
    padding: 16px;
    background: rgba(0,0,0,0.1);
    border-radius: 2px;
    box-shadow: inset 0px 0px 20px rgba(0,0,0,0.1);
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
