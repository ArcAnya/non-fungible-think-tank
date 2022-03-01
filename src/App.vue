<template>
  <!-- <img alt="NFTT logo" src="./assets/LOL.jpg"> -->
  <HelloWorld msg="Welcome to NFTT"/>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
#app {
  font: 1em/150% Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-size: 2em;
}
</style>
