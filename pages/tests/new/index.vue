<template lang="html">
  <div class="container-padding test-designer">
    <h1 class="mb">New Test</h1>
    <button class="save-test-button pad">Save</button>
    <input type="text" placeholder="Test Name" class="pad">
    <section class="variations mt">
      <section class="variation-tabs">
        <div class="tab" v-for="(variant, i) in variants" @click="editVariant(i)">
          <label>{{ variant.label }}</label>
        </div>
        <div class="tab" @click="addNewVariant">
          <label>+</label>
        </div>
      </section>

      <section class="variation-editor pad">
        <h3 class="mb">Editing {{ variants[editingVariant].label }}</h3>
        <div class="row mb variation-field">
          <label for="">Tagline</label>
          <input type="text" name="" value="" v-model="variants[editingVariant].tagline">
        </div>
        <div class="row variation-field">
          <label for="">CTA Label</label>
          <input type="text" name="" value="" v-model="variants[editingVariant].ctaLabel">
        </div>
      </section>
    </section>


  </div>
</template>

<script>
export default {
  data(){
    return {
      editingVariant: 0,
      variants: [
        {
          "label": "Control",
          "tagline": "",
          "ctaLabel": ""
        },
        {
          "label": "1",
          "tagline": "",
          "ctaLabel": ""
        }
      ]
    }
  },
  methods: {
    addNewVariant(){
      this.variants.push({
        "label": this.variants.length
      });
    },
    editVariant(i){
      this.editingVariant = i;
    }
  }
}
</script>

<style lang="css">

  .test-designer {
    position: relative;
  }

  .test-designer h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .test-designer h3 {
    font-weight: 600;
  }

  .save-test-button {
    float: right;
  }

  .variations {
    background: rgba(0,0,0,0.08);
  }

  .variation-tabs {
    display: flex;
  }

  .tab {
    padding: 16px;
    vertical-align: center;
    background: rgba(0,0,0,0.08);
    min-width: 64px;
    text-align: center;
  }

  .variation-field label {
    min-width: 128px;
    display: inline-block;
  }

  .tab:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  .tab:nth-child(even) {
    background: rgba(0,0,0,0.05)
  }
</style>
