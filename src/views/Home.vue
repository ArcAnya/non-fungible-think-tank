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
    <section class="content">
      <h1 class="nftt">Non<br>Fungable<br>Think<br>Tank</h1>
      <a href="/stake">
        <button>Stake with us!</button>
      </a>
    </section>
  </main>
</template>