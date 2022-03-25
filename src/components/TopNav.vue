<script setup>
import { ref, onMounted } from 'vue'

let mobileNav = ref(false)

function navToggle() {
  mobileNav.value = !mobileNav.value
}

</script>

<template>
  <header>
    <section  class="nav">
      <a class="logo" href="/" title="Return to the front page.">
        <img src="/nftt-logo.png">
        <p><strong>NFTT</strong></p>
      </a>
      <ul class="mobileNav" v-if="mobileNav">
        <li><a href="/stake" title="Stake with our vaildators">Stake</a></li>
        <li><a href="/about" title="Frequently asked questions">About</a></li>
        <li><a href="#blog" title="Read our latest blog posts">Blog</a></li>
        <li><a href="https://discord.gg/kxy7zkdBGf" title="Join our discord.">Discord</a></li>
      </ul>
      <!-- Hamburger menu -->
      <button class="hamburgermenu" @click="navToggle">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <ul class="desktopNav">
        <li><a href="/stake" title="Stake with our vaildators">Stake</a></li>
        <li><a href="/about" title="Frequently asked questions">About</a></li>
        <li><a href="#blog" title="Read our latest blog posts">Blog</a></li>
        <li><a href="https://discord.gg/kxy7zkdBGf" title="Join our discord.">Discord</a></li>
      </ul>
    </section>
  </header>
</template>