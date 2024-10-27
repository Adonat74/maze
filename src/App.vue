<script setup lang="js">
import { ref } from "vue";
import Board from "./components/Board.vue";

const size = ref(3);
const version = ref(0);
const selectedSize = ref(3);
const selectedVersion = ref(0);
const boardKey = ref(0);


function start () {
    size.value = selectedSize.value;
    version.value = selectedVersion.value;
	  boardKey.value++;
}

</script>

<template>
  	<h1>Maze</h1>
  	<form>
		<div>
			<label for="size">Select the size of the maze</label>
			<select name="size" id="size" v-model="selectedSize">
          <option v-for="i in 23" :key="i + 2" :value="i + 2">{{ i + 2 }}</option>
			</select>
		</div>
		<div>
			<label for="version">Select the version of the maze (1, 2 or 3)</label>
			<select name="version" id="version"  v-model="selectedVersion">
				<option value="0">1</option>
				<option value="1">2</option>
				<option value="2">3</option>
			</select>
		</div>
		<input type="button" name="start" id="start" @click="start" value="Start">
	</form>

    <Board :size="size" :version="version" :key="boardKey"/>

</template>

<style scoped>

</style>
