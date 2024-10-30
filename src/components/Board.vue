<script setup lang="js">
import mazeList from "../resources/mazes.json"
import CellClass from "./cell/Cell.js";
import Cell from "./cell/Cell.vue"
import {solveMaze} from "../solvers/mazeSolver.js";
import { onMounted, ref, computed } from 'vue'


const { size, version } = defineProps(['size', 'version'])

const cells = ref([]);
const cellSize = 30;

function loadMaze(cellsList) {
    cells.value = [];
    for (let i = 0; i < cellsList.length; i++) {
        cells.value.push(new CellClass(
            cellsList[i].posY,
            cellsList[i].posX,
            cellsList[i].walls,
            cellsList[i].entrance,
            cellsList[i].exit
        ));
    }
    solveMaze(cells.value);
}

const boardDimensions = computed(() => {
    return {
        width: `${cellSize*size}px`,
        height: `${cellSize*size}px`
    };
});









onMounted(() => loadMaze(mazeList[size][`ex-${version}`]));
</script>


<template>
    <div class="boardContainer">
        <div class="boardFlex" :style="boardDimensions">
            <Cell class="cell"
                  v-for="cell in cells"
                  :cell="cell"
                  :cellSize="cellSize"
                  :key="`${cell.posX}-${cell.posY}`"
                  :style="{ width: `${cellSize}px`, height: `${cellSize}px`, top: `${cellSize*cell.getY}px`, left: `${cellSize*cell.getX}px`}"
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
