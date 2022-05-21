<script setup>
import {ref, onMounted } from 'vue'

let coingeckoData = ref(null)

function fetchData() {
  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=akash-network&vs_currencies=usd`)
  .then(response => response.json())
  .then(data => coingeckoData.value = data)
}

fetchData()
</script>

<template>
  <section class="stakeasset">
    <p class="assetapr">~ APR</p>
    <p class="assetvalue" v-if="coingeckoData">${{ Math.round(coingeckoData["akash-network"]["usd"] * 1000) / 1000 }}</p>
    <img class="assetimg" src="/akash80x80.jpeg" alt="" width="80" height="80">
    <h2>Akash</h2>
    <p>Staked : NaN</p>
    <a href="https://akash.network/"><button>Stake Now</button></a>
  </section>
</template>