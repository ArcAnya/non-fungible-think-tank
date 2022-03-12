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
    <a class="logo" href="#Home" title="Return to the front page.">
      <svg width="60" height="60">
        <circle cx="30" cy="30" r="30"/>
      </svg>
      <p><strong>NFTT</strong></p>
    </a>
    <a href="#validators" title="Read about the validators.">Validators</a>
    <a href="#stake" title="Stake with our vaildators">Stake</a>
    <a href="#blog" title="Read our latest blog posts">Blog</a>
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 64px;
}

header a {
  padding: 8px;
  text-decoration: none;
  color: #5c5589;
  font-weight: 600;
}

a.logo {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

a.logo p {
  margin: 3px 0 0;
  padding-left: 20px;
  font-size: 1.5em;
  letter-spacing: 0.25em;
}

header button {
  padding: 1em 2em;
  width: 150px;
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