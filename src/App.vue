<script setup>
import { ref, onMounted } from 'vue'

let mobileNav = ref(false)

function navToggle() {
  mobileNav.value = !mobileNav.value
}

</script>

<template>
  <header>
    <a class="logo" href="/" title="Return to the front page.">
      <svg width="60" height="60">
        <circle cx="30" cy="30" r="30"/>
      </svg>
      <p><strong>NFTT</strong></p>
    </a>
    <ul class="mobileNav" v-if="mobileNav">
      <li><a href="/stake" title="Stake with our vaildators">Stake</a></li>
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
      <li><a href="/stake" title="Stake with our vaildators">Stake</a></li>
      <li><a href="#blog" title="Read our latest blog posts">Blog</a></li>
      <li><a href="#Discord" title="Join our discord.">Discord</a></li>
    </ul>
  </header>
  <router-view></router-view>
</template>