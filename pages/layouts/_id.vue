<template lang="html">
  <section class="mtx pbx">
    <nuxt-link to="/">Back</nuxt-link>
    <section class="mt">
      <button @click="createNewBlock">Create new block</button>
      <button @click="saveChanges">Save All Changes</button>

      <!--
      <button @click="increaseBlockMargin">Increase Block Margin</button>
      <button @click="decreaseBlockMargin">Decrease Block Margin</button>
    -->
    </section>
    <div class="row mt">
      <input placeholder="Name your page" v-model="pageName" class="c33" />
    </div>
    <section class="mt">
      <grid-layout @layout-updated="updateHandler" v-if="shown" :layout.sync="layout" :col-num="42" :row-height="36" :is-draggable="true" :is-resizable="true" :is-mirrored="false" :vertical-compact="true" :margin="blockMargin" :use-css-transforms="true">
          <grid-item v-for="(item, i) in layout" :key="i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" class="block-item relative">
            <button v-if=" item.i != 1 " @click="deleteBlock(item.i)" class="absolute-bottom-left delete-button"><font-awesome-icon icon="minus-circle"></font-awesome-icon></button>
            <span class="block-number absolute-top-left">{{item.i}}</span>
            <span class="block-size">{{ item.w  }} x {{ item.h }}</span>
          </grid-item>
      </grid-layout>
    </section>

  </section>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

import VueGridLayout from "vue-grid-layout";

export default {
  components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
  },
  data(){
    return {
      blockMargin: [0, 0],
      pageName: null,
      layout: [
    	    {"x":0,"y":0,"w":12,"h":2,"i":"1"},
    	    {"x":0,"y":2,"w":12,"h":4,"i":"2"},
    	],
      shown: true
    }
  },
  methods: {
    ...mapActions([
      "saveNewPage"
    ]),
    createNewBlock(){
      this.layout.push({
        "x": 0,
        "y": (this.layout[this.layout.length - 1].y + 2),
        "w": 4,
        "h": 4,
        "i": (this.layout.length + 1)
      });;
    },
    increaseBlockMargin(){
      this.blockMargin[0]++;
      this.blockMargin[1]++;
      this.shown = false;
      this.$nextTick(() => this.shown = true);
    },
    decreaseBlockMargin(){
      this.blockMargin[0]--;
      this.blockMargin[1]--;
      this.shown = false;
      this.$nextTick(() => this.shown = true);
    },
    deleteBlock(i){
      if (this.layout.length > 1){
        this.layout.splice((i - 1) , 1);
        this.layout.forEach((v, i) => {
          this.layout[i].i = (i + 1);
        })
      }
    },
    updateHandler(layout){
      this.layout = layout;
    },
    async saveChanges(){
      // do some validation n shit here
      await this.saveNewPage({
        "pageName": this.pageName,
        "pageLayout": this.layout
      });
    }
  }
}
</script>

<style lang="css">

  .block-item {
    background: rgba(0,0,0,0.02);
    padding: 8px;
    box-shadow: inset 0px 0px 200px rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.02);
    width: 100%;

  }

  .block-number {
    font-size: 16px;
    padding: 8px;

  }

  .block-size {
    text-align: center;
    margin: auto;
    display: block;
    position: relative;
    opacity: 0.25;
  }

  .block-item .delete-button {
    background: none;
    border: none;
    line-height: 16px;
    font-size: 16px;
    color: black;
    padding: 8px;
  }

</style>
