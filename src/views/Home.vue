<script setup>
import { ref, onMounted } from 'vue'

import ToDo from '@/components/ToDo.vue'
let walletConnected = ref(false)

function loginToggle() {
  walletConnected.value = !walletConnected.value
}

</script>

<template>
  <main>
    <h1>NFTT</h1>
    <p>Non fungable think tank</p>
    <button @click="loginToggle" v-if="walletConnected">Log out</button>
    <button @click="loginToggle" v-else>Connect Wallet</button>
    <ToDo />
  </main>
</template>