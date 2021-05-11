<template>
  <div id='list' @click='add' />
</template>

<script setup>
import { onMounted } from 'vue'
import { MasonryGrid } from '@egjs/grid'

let grid

onMounted(() => {
  grid = new MasonryGrid(document.querySelector('#list'))

  new Array(10).fill('').forEach(add)
})

const add = () => {
  const e = document.createElement('span')
  e.classList.add('item')
  e.style.height = `${Math.random() * 200}px`
  document.querySelector('#list').prepend(e)

  grid.renderItems();
}


</script>

<style>

.item {
  border: 1px solid;
  display: inline-block;
  min-width: 50px;
}
</style>
