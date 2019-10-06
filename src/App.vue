<template>
  <div id="app">
      <content-top></content-top>
      <content-left></content-left>
      <content-right></content-right>

  </div>
</template>
<script>
import ContentTop from './components/ContentTop.vue';
import ContentLeft from './components/ContentLeft.vue';
import ContentRight from './components/ContentRight.vue';

export default {
  components: {
    ContentTop,
    ContentLeft,
    ContentRight
  }
};
</script>

<style lang="scss">
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
