<script setup>
import { ref, onMounted } from 'vue'

import ToDo from './components/ToDo.vue'
let walletConnected = ref(false)
let mobileNav = ref(false)

function loginToggle() {
  walletConnected.value = !walletConnected.value
}

function navToggle() {
  mobileNav.value = !mobileNav.value
}

</script>

<template>
  <header>
    <a class="logo" href="#Home" title="Return to the front page.">
      <svg width="60" height="60">
        <circle cx="30" cy="30" r="30"/>
      </svg>
      <p><strong>NFTT</strong></p>
    </a>
    <ul class="mobileNav" v-if="mobileNav">
      <li><a href="#stake" title="Stake with our vaildators">Stake</a></li>
      <li><a href="#blog" title="Read our latest blog posts">Blog</a></li>
      <li><a href="#Discord" title="Join our discord.">Discord</a></li>
    </ul>
    <!-- Hamburger menu -->
    <button class="hamburgermenu" @click="navToggle">
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
    <ul class="desktopNav">
      <li><a href="#stake" title="Stake with our vaildators">Stake</a></li>
      <li><a href="#blog" title="Read our latest blog posts">Blog</a></li>
      <li><a href="#Discord" title="Join our discord.">Discord</a></li>
    </ul>
  </header>
  <main>
    <h1>NFTT</h1>
    <p>Non fungable think tank</p>
    <button @click="loginToggle" v-if="walletConnected">Log out</button>
    <button @click="loginToggle" v-else>Connect Wallet</button>
    <ToDo />
  </main>
</template>

<style scoped>

/* Global Styling */

/* Header */

header {
  padding: 22px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /*height: 64px;*/
}

header a {
  padding: 8px;
  text-decoration: none;
  color: #5c5589;
  font-weight: 600;
}

a.logo {
  margin: 2%;
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

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul.mobileNav {
  width: 100%;
  order: 1;
}

ul.mobileNav li {
  margin: 2.1em 0em;
  font-size: 1.25em;
}

header .hamburgermenu {
  margin: 8px;
  height: 50px;
  aspect-ratio: 1 / 1;
  position: relative;
  border: none;
  background-color: #ffffff;
}

header .hamburgermenu span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: #232323;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.hamburgermenu span.top {
  transform: translateY(-8px);
}

.hamburgermenu span.bottom {
  transform: translateY(8px);
}

.desktopNav {
  display: none;
  margin-right: 16%;
}
@media (min-width: 500px) {
  .hamburgermenu, .mobileNav {
    display: none;
  }

  ul.desktopNav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    flex: 1;
  }
}

/* main */

main {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

main button {
  padding: 1em 2em;
  width: 150px;
}

</style>