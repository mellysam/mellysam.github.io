<script lang="ts">
  import heart from "$lib/assets/heart.png";
  import us from "$lib/assets/us.png";

  let nextHeartId = 0;
  let hearts = $state<{ id: number; x: number; y: number }[]>([]);

  function showHeart(event: MouseEvent) {
    const id = nextHeartId++;
    const bounds = event.currentTarget instanceof HTMLElement ? event.currentTarget.getBoundingClientRect() : null;

    if (!bounds) {
      return;
    }

    hearts = [...hearts, { id, x: event.clientX - bounds.left, y: event.clientY - bounds.top }];
    window.setTimeout(() => {
      hearts = hearts.filter((heartBurst) => heartBurst.id !== id);
    }, 2000);
  }
</script>

<div class="pixel-us-shell">
  <button class="pixel-us" type="button" aria-label="Herz anzeigen" onclick={showHeart}>
    <img class="people" src={us} alt="Pixel art of us two" />
  </button>
  {#each hearts as heartBurst (heartBurst.id)}
    <img
      class="heart-pop"
      src={heart}
      alt=""
      aria-hidden="true"
      style:left={`${heartBurst.x}px`}
      style:top={`${heartBurst.y}px`}
    />
  {/each}
</div>

<style>
  .pixel-us-shell {
    position: relative;
    width: 100%;
  }

  .pixel-us {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .people {
    display: block;
    width: 100%;
    image-rendering: pixelated;
  }

  .heart-pop {
    position: absolute;
    width: 3rem;
    image-rendering: pixelated;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 3;
    animation: heart-pop 2s ease-out forwards;
  }

  @keyframes heart-pop {
    0% {
      opacity: 0;
      transform: translate(-50%, -35%) scale(0.6);
    }

    18% {
      opacity: 1;
      transform: translate(-50%, -65%) scale(1.15);
    }

    70% {
      opacity: 1;
      transform: translate(-50%, -100%) scale(1);
    }

    100% {
      opacity: 0;
      transform: translate(-50%, -130%) scale(0.9);
    }
  }
</style>
