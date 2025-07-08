<script lang="ts">
  type Props = {
    number: number,
    clue: string,
  };

  let {number, clue}: Props = $props();

</script>

<div class="clue">
  <div class="clue-text">
    {number}. {clue}
  </div>
</div>

<style>
</style>