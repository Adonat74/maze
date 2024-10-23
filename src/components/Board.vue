<script setup lang="ts">
import mazeList from "../resources/mazes.json"
import { onMounted, ref } from 'vue'

const props = defineProps({
  size: Number,
  version: Number
})

let maze = ref([]);

function loadMaze() {
    maze.value = mazeList[props.size][`ex-${props.version}`];
}



onMounted(() => loadMaze());

</script>

<template>
    <div v-for="cell in maze">
        <div>{{ cell.posX }}</div>
    </div>
  
</template>

<style scoped>

</style>
