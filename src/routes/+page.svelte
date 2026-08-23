<script lang="ts">
  import AddToCalendarButton from "$lib/components/AddToCalendarButton.svelte";
  import Countdown from "$lib/components/Countdown.svelte";
  import DateHighlight from "$lib/components/DateHighlight.svelte";
  import FlowerStrip from "$lib/components/FlowerStrip.svelte";
  import FormattedDate from "$lib/components/FormattedDate.svelte";
  import PixelUs from "$lib/components/PixelUs.svelte";
  import { MEETING_TIME, PARTY_TIME, WEDDING_DAY } from "$lib/dates";
</script>

<main>
  <h1 id="page-title">Save the Date</h1>
  <DateHighlight>
    <p class="date"><FormattedDate date={WEDDING_DAY} /></p>
  </DateHighlight>
  <section aria-label="Countdown" aria-live="polite">
    <Countdown date={MEETING_TIME} />
  </section>
  <AddToCalendarButton start={MEETING_TIME} end={PARTY_TIME} title="Hochzeit Melanie & Samuel" />
</main>

<div class="pixel-us">
  <PixelUs />
</div>
<div class="flowers">
  <FlowerStrip />
</div>

<style>
  :global(body) {
    margin: 0;
  }

  main {
    display: grid;
    align-content: start;
    justify-items: center;
    gap: clamp(1rem, 3vw, 2rem);
    min-height: 100vh;
    box-sizing: border-box;
    padding: 2rem 1rem 18rem;
    text-align: center;
  }

  h1 {
    font-size: clamp(1.8rem, 6vw, 3.4rem);
  }

  .date {
    margin: 0;
    font-size: clamp(2.4rem, 10vw, 5.8rem);
    font-weight: 700;
  }

  .pixel-us {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    width: min(18rem, 70vw);
    transform: translateX(-50%);
    z-index: 0;
  }

  .flowers {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
</style>
