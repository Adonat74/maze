<script setup lang="js">
import { ref } from "vue";
import Board from "./components/Board.vue";

const size = ref(3);
const version = ref(0);
const boardKey = ref(0);


function start () {
	boardKey.value++;
}

</script>

<template>
  	<h1>Maze</h1>

  	<form>
		<div>
			<label for="size">Select the size of the maze</label>
			<select name="size" id="size" v-model="size">
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
			</select>
		</div>
		<div>
			<label for="version">Select the version of the maze (1, 2 or 3)</label>
			<select name="version" id="version"  v-model="version">
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
