<template lang="html">
  <div class="container-padding test-designer">
    <h1 class="mb">New Test</h1>
    <button class="save-test-button pad" @click="save">{{ saveButtonText }}</button>
    <input type="text" placeholder="Test Name" class="pad" v-model="experimentName">
    <section class="variations mt" v-if="variants">
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
import { mapActions, mapGetters } from "vuex";

export default {
  data(){
    return {
      saveButtonText: "Save",
      editingVariant: 0,
      experimentName: null,
      initialState: [
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
      ],
      variants: null
    }
  },
  methods: {
    ...mapActions([
      "saveExperiment"
    ]),
    addNewVariant(){
      this.variants.push({
        "label": this.variants.length
      });
    },
    editVariant(i){
      this.editingVariant = i;
    },
    reset(){
      console.log("was this called?")
      console.log(this.variants);
      this.variants = this.initialState;
      this.experimentName = "";
      console.log(this.variants);

    },
    save(){
      this.saveButtonText = "Saving...";
      this.saveExperiment({
        "_id": (((1+Math.random())*0x10000)|0).toString(16).substring(1),
        "name": this.experimentName,
        "variants": this.variants
      });
      setTimeout(() => {
        this.saveButtonText = "Saved!!";
      }, 500);
      setTimeout(() => {
        this.saveButtonText = "Save";
        this.reset();
      }, 1500);
    }
  },
  mounted(){
    this.reset()
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
