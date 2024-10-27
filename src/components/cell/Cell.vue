<script setup lang="js">
const { cell, cellSize } = defineProps(['cell', 'cellSize'])


function wallsRender () {
    let{ top, right, bottom, left} = 0;
    let color = 'ghostwhite'
    if (cell.entrance) {
        color = 'green';
    } else if (cell.exit) {
        color = 'red';
    }
    if(cell.walls[0]){
        top = 2;
    }
    if(cell.walls[1]){
        right = 2;
    }
    if(cell.walls[2]){
        bottom = 2;
    }
    if(cell.walls[3]){
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
