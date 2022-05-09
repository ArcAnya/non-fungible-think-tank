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
        <li><a href="/about" title="Frequently asked questions">FAQ</a></li>
        <li>
          <span>
            <a href="https://discord.gg/kxy7zkdBGf" title="Join our discord."><img src="/discord.svg" width="28" height="28"></a>
            <a href="https://www.youtube.com/channel/UC57l2EsR_Za5IiKn-je0XXA" title="Subscribe to NFTT's youtube channel."><img src="/youtube.svg" width="28" height="28"></a>
            <a href="https://twitter.com/crusader_w" title="Follow CrusaderW on twitter."><img src="/twitter.svg" width="28" height="28"></a>
          </span>
        </li>
      </ul>
      <!-- Hamburger menu -->
      <button class="hamburgermenu" @click="navToggle">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <ul class="desktopNav">
        <li><a href="/stake" title="Stake with our vaildators">Stake</a></li>
        <li><a href="/about" title="Frequently asked questions">FAQ</a></li>
      </ul>
      <span class="desktopsocials">
        <a href="https://discord.gg/kxy7zkdBGf" title="Join our discord."><img src="/discord.svg" width="28" height="28"></a>
        <a href="https://www.youtube.com/channel/UC57l2EsR_Za5IiKn-je0XXA" title="Subscribe to NFTT's youtube channel."><img src="/youtube.svg" width="28" height="28"></a>
        <a href="https://twitter.com/crusader_w" title="Follow CrusaderW on twitter."><img src="/twitter.svg" width="28" height="28"></a>
      </span>
    </section>
  </header>
</template>