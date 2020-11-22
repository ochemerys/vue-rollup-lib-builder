<script>
import Vue from 'vue';

import { HelloWorld } from '@/entry';
import { AppBanner } from '@/entry';

import PageMethods from '../specs/server-stubs/page-methods';

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
    <app-banner position="bottom">
      <h1>Banner example</h1>
    </app-banner>
    <hello-world :value="hwMessage" :color="hwColor" />
  </div>
</template>

<style>
</style>