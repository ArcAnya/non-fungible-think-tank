<script setup>
import { ref } from 'vue'

defineProps(['question', 'answer',])

const hideText = ref(true)

</script>

<template>
    <article :class="{ hidetext: hideText }">
      <section @click="hideText = !hideText">
      <h2 id="faq-show-more">{{ question }}</h2>
      <img src="/triangleup16x13.svg" alt="Show more">
      </section>
        <p>{{ answer }}</p>
    </article>
</template>
