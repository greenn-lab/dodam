<template>
  <div>
    <h1>Vocabulary</h1>

    <ul>
      <li v-for='i in list' :key='i.id'>{{i}}</li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const list = store.getters['vocabulary/getAllItems']

console.log(list)

</script>
