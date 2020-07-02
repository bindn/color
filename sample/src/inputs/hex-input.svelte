<script>
  import { createEventDispatcher } from "svelte";
  import Input from "./input.svelte";

  import { Hex } from "../../../dist/index.js";

  export let hex;

  const dispatch = createEventDispatcher();

  function changeColor() {
    dispatch("colorChange", hex);
  }

</script>

<style>
  header {
    background-color: #cecece;
  }
  .card {
    margin: 30px 0px;
  }
</style>

<div class="card">
  <header class="card-header">
    <p class="card-header-title is-unselectable">Hex</p>
  </header>
  <div class="card-content">
    <div class="content">

      <Input
        bind:value={hex}
        on:colorChange={changeColor}
        label="#"
        isValid={Hex.isValid(hex)} />

    </div>
  </div>

</div>
