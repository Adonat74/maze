<script setup lang="js">
import mazeList from "../resources/mazes.json"
import Cell from "./cell/Cell.vue"
import { onMounted, ref, computed } from 'vue'


const { size, version } = defineProps(['size', 'version'])

const maze = ref([]);
const cellSize = 30;

function loadMaze() {
    maze.value = mazeList[size][`ex-${version}`];
}
onMounted(() => loadMaze());

const boardDimensions = computed(() => {
    return {
        width: `${cellSize*size}px`,
        height: `${cellSize*size}px`
    };
});
</script>


<template>
    <div class="boardContainer">
        <div class="boardFlex" :style="boardDimensions">
            <Cell class="cell"
                  v-for="cell in maze"
                  :cell="cell"
                  :cellSize="cellSize"
                  :key="`${cell.posX}-${cell.posY}`"
                  :style="{ width: `${cellSize}px`, height: `${cellSize}px`, top: `${cellSize*cell.posX}px`, left: `${cellSize*cell.posY}px`}"
            ></Cell>
        </div>
    </div>

</template>


<style scoped>
.boardContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0 0;
}

.boardFlex {
    position: relative;
    border: 2px solid purple;
}
.cell {
    position: absolute;
}


</style>
