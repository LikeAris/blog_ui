<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from './views/index.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
