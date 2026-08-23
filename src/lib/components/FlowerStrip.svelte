<script lang="ts">
  import flowers from "$lib/assets/flowers.png";
</script>

<div class="flowers" aria-hidden="true" style={`background-image: url(${flowers})`}></div>

<style>
  .flowers {
    width: 100%;
    height: 8rem;
    background-repeat: repeat-x;
    background-position: bottom left;
    background-size: auto 100%;
    pointer-events: none;
    image-rendering: pixelated;
  }
</style>
