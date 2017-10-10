<template>
  <div class="share-order">
    <modal name="goShare-modal">
      <div class="go-share-div" @click="closeModal()">
        <img class="go-share-pic" src="../../../assets/shareOrder/share.png">
        <div class="clear"></div>
      </div>
    </modal>
  </div>
</template>
<style lang="scss" scoped rel="stylesheet/scss">
  .share-order {
    position: fixed;
    width: 5.4rem;
    height: 3.1rem;
    right: 0;
    background: transparent;
    top: 1.4rem;
  }
  .share-order {
    z-index: 999;

    .go-share-div {
      .go-share-pic {
        width: 70%;
        float: right;
        margin: 1rem;
      }
      .clear {
        clear: both;
      }
    }
  }
</style>
<script lang="ts">
  import Vue from 'vue';
  import Component from '../../../public/classComponent/index';
  import { EventBus } from '../../../public/utils/eventBus';
  @Component
  export default class goShareModel extends Vue {
    closeModal() {
      EventBus.$emit('goShareClose');
    }
  }
</script>
