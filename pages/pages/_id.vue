<template lang="html">
  <main class="page-editor container-padding about-me">
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
    </Container>
  </main>
</template>


<script>
import { Container, Draggable } from "vue-smooth-dnd";
export default {
  components: { Container, Draggable }
};
</script>

<style lang="css">

  .draggable-item:hover {
    background: rgba(0,0,0,0.1);
    cursor:pointer;
    opacity: 0.6;
  }

  .about-me h2 {
    font-size: 48px;
  }

</style>
