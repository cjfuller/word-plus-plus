<script lang="ts">
	import { statusForLetter, type GridIndex } from "./puzzle";

	interface Props {
		letter: string | undefined;
    answer?: string;
    wpp?: string;
    onChanged: () => void;
    hpos?: GridIndex;
	}
	let { letter = $bindable(), answer, onChanged, wpp, hpos }: Props = $props();
  let highlight = answer !== undefined && wpp !== undefined && hpos !== undefined ? statusForLetter(answer, wpp, hpos) : "absent";
</script>

<div class={`outer ${highlight}`}><input class="letter-input" type="text" bind:value={letter} onchange={onChanged}></div>

<style>
  .inexact {
    background-color: var(--inexact-bg);
  }
  .exact {
    background-color: var(--exact-bg);
  }
  .outer {
    width: var(--letter-box-size);
    height: var(--letter-box-size);
    border-right: var(--border);
    border-bottom: var(--border);
    border-collapse: collapse;
  }
  .outer:first-child {
    border-left: var(--border);
  }
  .letter-input {
    background-color: inherit !important;
    color: inherit !important;
    border: none;
    font-family: inherit !important;
    font-size: inherit !important;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    padding-top: 2px;
  }
</style>
