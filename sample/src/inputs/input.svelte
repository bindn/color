<script>
  import { createEventDispatcher } from "svelte";
  export let label;
  export let value;
  export let isValid;
  export let maxInputLength = 6;
  let selected = value;

  $: {
    if (isValid) {
      selected = value;
      dispatch("colorChange", selected);
    }
  }

  function reset() {
    value = selected;
  }

  const dispatch = createEventDispatcher();
</script>

<style>
 .field-label{
  margin-right: .5rem;
  flex-grow: 0;
}
.field{
  max-width: 100px;
}
.input {
  min-width: 60px;
}
</style>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label is-pulled-left is-unselectable">{label}</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input
          class="input"
          maxlength={maxInputLength}
          type="text"
          class:is-danger={!isValid}
          on:blur={reset}
          bind:value />
      </div>
    </div>

  </div>

</div>
