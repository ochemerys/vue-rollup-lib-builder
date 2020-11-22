<template>
  <div class="hello" :style="{color: color}">Hello {{value}}.</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    value: {
      type: String,
      default: 'world',
    },
    color: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 8px;
}
</style>