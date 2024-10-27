<script setup lang="js">
const { cell, cellSize } = defineProps(['cell', 'cellSize'])


function wallsRender () {
    let{ top, right, bottom, left} = 0;
    let color = 'ghostwhite';
    if (cell.getCurrentCell) {
        color = 'orange';
    } else if (cell.getVisited) {
        color = 'blue';
    }
    if (cell.getEntrance) {
        color = 'green';
    } else if (cell.getExit) {
        color = 'red';
    }

    if(cell.getWalls[0]){
        top = 2;
    }
    if(cell.getWalls[1]){
        right = 2;
    }
    if(cell.getWalls[2]){
        bottom = 2;
    }
    if(cell.getWalls[3]){
        left = 2;
    }
    return {
        borderTop: `${top}px solid purple`,
        borderRight: `${right}px solid purple`,
        borderBottom: `${bottom}px solid purple`,
        borderLeft: `${left}px solid purple`,
        backgroundColor: `${color}`
    }
}

</script>

<template>
    <div class="cell" :style="wallsRender()">

    </div>
</template>



<style scoped>
.cell {
    box-sizing: border-box;
}
</style>
