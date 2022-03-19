<script setup>
import { ref } from 'vue'

const header = ref('To Do App')
const items = ref([])
const newItem = ref('')
const saveItem = () => {
  items.value.push({id: items.value.length + 1, label: newItem.value})
  newItem.value = ''
}

const toggleCompleted = (item) => {
  item.completed = !item.completed
}

</script>

<template>
  <form @submit.prevent="saveItem">
    <h1>{{ header }}</h1>
    <input v-model.trim="newItem" type="text" placeholder="Add">
    <button :disabled="newItem.length < 1">Save</button>
    <ul>
      <li v-for="({id, label, completed}, index) in items" :key="id" :class="{strikeout: completed}" @click="toggleCompleted(items[index])">
      {{ label }}
      </li>
    </ul>
  </form>
</template>

<style scoped>
form {
  padding: 2em;
  margin: 1em;
  border: 2px solid black;
}

form li {
  padding: 0.5em;
}

form li.strikeout {
  text-decoration: line-through;
  color: #b8c2cc;
}
</style>