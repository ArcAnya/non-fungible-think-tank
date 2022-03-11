<script setup>
// App for a Count button using Composition Api
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)
let walletConnected = ref(false)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

function loginToggle() {
  if (walletConnected.value === true) {
    walletConnected.value = false
  } else {
    walletConnected.value = true
  }
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

</script>

<template>
  <header>
    <a href="#validators" title="Read about the validators.">Validators</a>
    <a href="#Discord" title="Join our discord.">Discord</a>
    <button @click="loginToggle" v-if="walletConnected">Log out</button>
    <button @click="loginToggle" v-else>Connect Wallet</button>
  </header>
  <main>
    <h1>NFTT</h1>
    <p>Non fungable think tank</p>
  <button class="mainlogin">Connect Wallet</button>
  </main>
</template>

<style scoped>

/* Global Styling */

/* Header */

header {
  height: 8vh;
  border-bottom: 2px solid black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 35%;
  position: relative;
}

header button {
  padding: 1em 2em;
  width: 150px;
  position: absolute;
  right: 1%;
}

/* main */

main {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>