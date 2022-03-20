<script setup>
import { ref, onMounted } from 'vue'

import StakeCommercio from '@/components/StakeCommercio.vue'
import StakePassage from '@/components/StakePassage.vue'

</script>

<template>
  <main class="stake">
    <h1>Stake</h1>
    <StakeCommercio />
    <StakePassage />
  </main>
</template>