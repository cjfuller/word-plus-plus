<script lang="ts">
	import { writable, type Writable } from "svelte/store";
	import Box from "./box.svelte";
	import { onMount } from "svelte";
	import type { Puzzle } from "./puzzle";
  type GridIndex = 0 | 1 | 2 | 3 | 4;
  type GridKey = `grid_r${GridIndex}_c${GridIndex}`;
  type WordKey = `wpp_${GridIndex}`
  type GridState = {
    [Property in (GridKey | WordKey | "__reset")]?: string;
  }
  const gridStore: Writable<GridState> = writable({});
  gridStore.subscribe((value) => globalThis.localStorage && JSON.stringify(value) !== "{}" ? globalThis.localStorage.gridState = JSON.stringify(value) : void "");
  const {puzzle}: {puzzle: Puzzle} = $props();
  // STOPSHIP(colin): this needs to actually use the current date as a key.
  onMount(() => $gridStore = JSON.parse(window.localStorage.getItem("gridState") ?? "{}"));
</script>

<div>
	<div class="grid">
		<div class="grid-row">
			<Box bind:letter={$gridStore.grid_r0_c0} answer={puzzle.answers.across_0[0]} wpp={puzzle.answers.wpp} hpos={0} />
			<Box bind:letter={$gridStore.grid_r0_c1} answer={puzzle.answers.across_0[1]} wpp={puzzle.answers.wpp} hpos={1} />
			<Box bind:letter={$gridStore.grid_r0_c2} answer={puzzle.answers.across_0[2]} wpp={puzzle.answers.wpp} hpos={2} />
			<Box bind:letter={$gridStore.grid_r0_c3} answer={puzzle.answers.across_0[3]} wpp={puzzle.answers.wpp} hpos={3} />
			<Box bind:letter={$gridStore.grid_r0_c4} answer={puzzle.answers.across_0[4]} wpp={puzzle.answers.wpp} hpos={4} />
		</div>
		<div class="grid-row">
			<Box bind:letter={$gridStore.grid_r1_c0} answer={puzzle.answers.across_1[0]} wpp={puzzle.answers.wpp} hpos={0} />
			<Box bind:letter={$gridStore.grid_r1_c1} answer={puzzle.answers.across_1[1]} wpp={puzzle.answers.wpp} hpos={1} />
			<Box bind:letter={$gridStore.grid_r1_c2} answer={puzzle.answers.across_1[2]} wpp={puzzle.answers.wpp} hpos={2} />
			<Box bind:letter={$gridStore.grid_r1_c3} answer={puzzle.answers.across_1[3]} wpp={puzzle.answers.wpp} hpos={3} />
			<Box bind:letter={$gridStore.grid_r1_c4} answer={puzzle.answers.across_1[4]} wpp={puzzle.answers.wpp} hpos={4} />
		</div>
		<div class="grid-row">
			<Box bind:letter={$gridStore.grid_r2_c0} answer={puzzle.answers.across_2[0]} wpp={puzzle.answers.wpp} hpos={0} />
			<Box bind:letter={$gridStore.grid_r2_c1} answer={puzzle.answers.across_2[1]} wpp={puzzle.answers.wpp} hpos={1} />
			<Box bind:letter={$gridStore.grid_r2_c2} answer={puzzle.answers.across_2[2]} wpp={puzzle.answers.wpp} hpos={2} />
			<Box bind:letter={$gridStore.grid_r2_c3} answer={puzzle.answers.across_2[3]} wpp={puzzle.answers.wpp} hpos={3} />
			<Box bind:letter={$gridStore.grid_r2_c4} answer={puzzle.answers.across_2[4]} wpp={puzzle.answers.wpp} hpos={4} />
		</div>
		<div class="grid-row">
			<Box bind:letter={$gridStore.grid_r3_c0} answer={puzzle.answers.across_3[0]} wpp={puzzle.answers.wpp} hpos={0} />
			<Box bind:letter={$gridStore.grid_r3_c1} answer={puzzle.answers.across_3[1]} wpp={puzzle.answers.wpp} hpos={1} />
			<Box bind:letter={$gridStore.grid_r3_c2} answer={puzzle.answers.across_3[2]} wpp={puzzle.answers.wpp} hpos={2} />
			<Box bind:letter={$gridStore.grid_r3_c3} answer={puzzle.answers.across_3[3]} wpp={puzzle.answers.wpp} hpos={3} />
			<Box bind:letter={$gridStore.grid_r3_c4} answer={puzzle.answers.across_3[4]} wpp={puzzle.answers.wpp} hpos={4} />
		</div>
		<div class="grid-row">
			<Box bind:letter={$gridStore.grid_r4_c0} answer={puzzle.answers.across_4[0]} wpp={puzzle.answers.wpp} hpos={0} />
			<Box bind:letter={$gridStore.grid_r4_c1} answer={puzzle.answers.across_4[1]} wpp={puzzle.answers.wpp} hpos={1} />
			<Box bind:letter={$gridStore.grid_r4_c2} answer={puzzle.answers.across_4[2]} wpp={puzzle.answers.wpp} hpos={2} />
			<Box bind:letter={$gridStore.grid_r4_c3} answer={puzzle.answers.across_4[3]} wpp={puzzle.answers.wpp} hpos={3} />
			<Box bind:letter={$gridStore.grid_r4_c4} answer={puzzle.answers.across_4[4]} wpp={puzzle.answers.wpp} hpos={4} />
		</div>
	</div>
	<div class="spacer"></div>
	<div class="wpp-row">
		<Box bind:letter={$gridStore.wpp_0} />
		<Box bind:letter={$gridStore.wpp_1} />
		<Box bind:letter={$gridStore.wpp_2} />
		<Box bind:letter={$gridStore.wpp_3} />
		<Box bind:letter={$gridStore.wpp_4} />
	</div>
</div>

<style>
	.grid-row {
		display: flex;
		flex-direction: row;
	}
	.spacer {
		height: var(--letter-box-size);
	}
	.wpp-row {
		display: flex;
		flex-direction: row;
	}
</style>
