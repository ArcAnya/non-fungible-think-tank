<script setup>
import { ref, onMounted } from 'vue'

import StakeCommercio from '@/components/StakeCommercio.vue'
import StakePassage from '@/components/StakePassage.vue'
import StakeAkash from '@/components/StakeAkash.vue';

</script>

<template>
  <main>
    <section class="content">
      <p>*Currenty unavailable.</p>
      <h1>Stake</h1>
      <StakeCommercio />
      <StakePassage />
      <StakeAkash />
    </section>
  </main>
</template>