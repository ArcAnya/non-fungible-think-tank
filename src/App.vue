<script setup>
import { ref, onMounted } from 'vue'

import TopNav from '@/components/TopNav.vue'

</script>

<template>
  <TopNav />
  <router-view></router-view>
</template>