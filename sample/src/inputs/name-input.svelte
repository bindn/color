<script>
  import { createEventDispatcher } from "svelte";
  import { Names, ColorMap } from "../../../dist/index";

  export let hex;

  const dispatch = createEventDispatcher();

  const names = Names.list().default.sort((a, b) => (a.value > b.value ? 1 : -1));

  $: isActive = false;
  $: colorHex = "";
  $: colorName = "";

  $: {
    const color = ColorMap.Hex.toName(hex);
    if (color.value !== "") {
        colorHex = color.hex;
        colorName = color.value;
    }
    else{
      colorHex = "";
      colorName = "";
    }
  }

  function selectColor(selectedHex, selectedName) {
    colorHex = selectedHex;
    colorName = selectedName;
    isActive = false;
    dispatch("colorChange", colorHex);
  }
</script>

<style>
  header {
    background-color: #cecece;
  }
  .card {
    margin: 30px 0px;
  }

  .color-sample {
    height: 20px;
    width: 20px;
    display: inline-block;
    background-color: var(--color-option);
    border-radius: 10px;
    vertical-align: bottom;
    margin: 0 5px;
    border: 2px black solid;
  }

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .dropdown-content {
    overflow-x: hidden;
    overflow-y: auto;
    height: 400px;
    white-space: nowrap;
  }

  .dropdown-item {
    cursor: pointer;
  }
  .selected-color {
    min-width: 200px;
    text-align: left;
  }
</style>
<div class="card">
  <header class="card-header">
    <p class="card-header-title is-unselectable">Name</p>
  </header>
  <div class="card-content">
    <div class="content">

      <div class:is-active={isActive} class="dropdown">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            on:click|stopPropagation={() => {
              isActive = !isActive;
            }}>

            {#if colorHex === ''}
              <span>Select Color By Name</span>
            {:else}
              <span style="--color-option:#{colorHex};" class="selected-color">
                <span class="color-sample" />
                <span class="color-name">{colorName}</span>
              </span>
            {/if}

            <span class="icon is-small">
              <i class:down={!isActive} class:up={isActive} class="arrow" />
            </span>

          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            {#each names as item}
              <div
                on:click={() => {
                  selectColor(item.hex, item.value);
                }}
                style="--color-option:#{item.hex};"
                class="dropdown-item">
                <span class="color-sample" />
                <span class="color-name">{item.value}</span>
              </div>
            {/each}

          </div>
        </div>
      </div>

    </div>
  </div>

</div>
<svelte:window on:click={()=>{isActive = false}} />