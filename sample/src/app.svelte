<script>
  import { Hex, Rgb, ColorMap } from "../../dist/index.js";
  import HexInput from "./inputs/hex-input.svelte";
  import RgbInput from "./inputs/rgb-input.svelte";
  import NameInput from "./inputs/name-input.svelte";
  import utils from "./utilities.js";

  $: hex = "44012D";
  $: rgb = ColorMap.Hex.toRgb(hex);

  $: selectedColorText = utils.getBlackOrWhiteContrast(hex);

  function hexUpdated(event) {
    hex = event.detail;
  }

  function rgbUpdated(event) {
    hex = ColorMap.Rgb.toHex(...event.detail).value;
  }

</script>

<style>
  .page-header {
    background-color: var(--selected-color);
    color: var(--selected-color-text);
    width: 100%;
    margin: 0px;
    padding: 10px;
    font-size: 24px;
    font-family: "Laila", serif;
  }

  main {
    margin: 20px auto;
    max-width: 500px;
    
  }
</style>
<header
  class="page-header is-unselectable"
  style="--selected-color:{Hex.format(hex)}; --selected-color-text:{Hex.format(selectedColorText)}">
  Selected Color
</header>

<main>
  <NameInput {hex} on:colorChange={hexUpdated} />
  <HexInput {hex} on:colorChange={hexUpdated} />
  <RgbInput
    red={rgb.red}
    green={rgb.green}
    blue={rgb.blue}
    on:colorChange={rgbUpdated} />
</main>
