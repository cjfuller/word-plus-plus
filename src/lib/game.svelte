<script lang="ts">
	import Clues from "./clues.svelte";
	import Grid from "./grid.svelte";
  import {DemoPuzzle} from "./puzzle.ts";
</script>

<div id="main">
  <div id="game">
    <Grid puzzle={DemoPuzzle} />
    <div class="spacer"></div>
    <Clues puzzle={DemoPuzzle} />
  </div>
</div>

<style>
  #game {
    display: flex;
    flex-direction: row;
  }
  #main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .spacer {
    width: var(--letter-box-size);
  }
</style>