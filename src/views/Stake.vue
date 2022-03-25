<script setup>
import { ref, onMounted } from 'vue'

import StakeCommercio from '@/components/StakeCommercio.vue'
import StakePassage from '@/components/StakePassage.vue'

</script>

<template>
  <main>
    <section class="content">
      <h1>Stake</h1>
      <StakeCommercio />
      <StakePassage />
    </section>
  </main>
</template>