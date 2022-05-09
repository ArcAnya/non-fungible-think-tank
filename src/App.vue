<script setup>
import { ref, onMounted } from 'vue'

import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <TopNav />
  <router-view></router-view>
  <Footer />
</template>