<script>
  import { createEventDispatcher } from "svelte";
  import Input from "./input.svelte";

  import { Rgb } from "../../../dist/index.js";

  export let red;
  export let green;
  export let blue;

  const dispatch = createEventDispatcher();

  function changeColor() {
    if (Rgb.isValid(red, green, blue))
      dispatch("colorChange", [red, green, blue]);
  }

  $: {
    red = parseInput(red);
    green = parseInput(green);
    blue = parseInput(blue);
  }

  function parseInput(value) {
    let parsedValue = parseInt(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
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
    <p class="card-header-title is-unselectable">Rgb</p>
  </header>
  <div class="card-content">
    <div class="content">
      <div class="columns is-mobile">
        <div class="column">
          <Input
            label="Red"
            bind:value={red}
            maxInputLength={3}
            on:colorChange={changeColor}
            isValid={Rgb.isValueValid(red)} />
        </div>
        <div class="column">
          <Input
            label="Green"
            bind:value={green}
            maxInputLength={3}
            on:colorChange={changeColor}
            isValid={Rgb.isValueValid(green)} />
        </div>
        <div class="column">
          <Input
            label="Blue"
            bind:value={blue}
            maxInputLength={3}
            on:colorChange={changeColor}
            isValid={Rgb.isValueValid(blue)} />
        </div>
      </div>

    </div>
  </div>

</div>
