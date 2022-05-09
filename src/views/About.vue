<script setup>
import { ref, onMounted, reactive } from 'vue'

import FaqArticle from '@/components/FaqArticle.vue'

const articles = ref([
  { id: 1, question: 'Where can I get tokens?', answer: 'As of right now the commercio and passage tokens are not available to be traded on any exchanges.' },
  { id: 2, question: 'What is commercio?', answer: '' },
  { id: 3, question: 'What is Passage 3D?', answer: ''},
  { id: 4, question: 'How does staking work?', answer: ''},
  { id: 5, question: 'What happens to my delegated tokens?', answer: ''},
  { id: 6, question: 'Can I undelegate at any time?', answer: ''},
  { id: 7, question: 'When will I start getting rewards?', answer: ''},
  { id: 8, question: 'Is staking safe?', answer: ''},
])

</script>

<template>
  <main>
    <section class="content">
      <h1 class="faq-title">Frequently asked questions</h1>
      <section class="faq">
        <FaqArticle
          v-for="article in articles"
          :key="article.id"
          :question="article.question"
          :answer="article.answer"
        />
      </section>
    </section>
  </main>
</template>