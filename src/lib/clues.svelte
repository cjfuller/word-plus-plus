
<script lang="ts">
	import Clue from "./clue.svelte";
	import type { Puzzle } from "./puzzle";
  const {puzzle}: {puzzle: Puzzle} = $props();

</script>

<div class="clues">
  <div class="clues-header">Across</div>
  <Clue number={1} clue={puzzle.clues.across_0}/>
  <Clue number={2} clue={puzzle.clues.across_1}/>
  <Clue number={3} clue={puzzle.clues.across_2}/>
  <Clue number={4} clue={puzzle.clues.across_3}/>
  <Clue number={5} clue={puzzle.clues.across_4}/>
  <div class="clues-header">Down</div>
  <Clue number={1} clue={puzzle.clues.down_0}/>
  <Clue number={2} clue={puzzle.clues.down_1}/>
  <Clue number={3} clue={puzzle.clues.down_2}/>
  <Clue number={4} clue={puzzle.clues.down_3}/>
  <Clue number={5} clue={puzzle.clues.down_4}/>
</div>

<style>
  .clues {
    font-size: 20px;
  }
  .clues-header {
    font-variant: small-caps;
  }
  .clues-header:not(:first-of-type) {
    margin-top: 1rem;
  }
</style>