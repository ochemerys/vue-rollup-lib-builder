<script>
import Vue from 'vue';

import { HelloWorld } from '@/entry';
import { AppBanner } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    HelloWorld,
    AppBanner,
  },
  data() {
    return {
      hwMessage: 'Example',
      hwColor: 'orange',
      bannerPosition: "bottom",
    }
  },
});
</script>

<template>
  <div id="app">
      <div>   
        <h3>Vue Custom Library implementation sample </h3>  
      </div>
      <hello-world :value="hwMessage" :color="hwColor" />
      <app-banner position="bottom">
        <p>This is a custom banner content.</p>
      </app-banner>
  </div>
</template>

<style>
</style>