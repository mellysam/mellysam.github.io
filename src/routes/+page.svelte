<script lang="ts">
  import AddToCalendarButton from "$lib/components/AddToCalendarButton.svelte";
  import Button from "$lib/components/Button.svelte";
  import Countdown from "$lib/components/Countdown.svelte";
  import DateHighlight from "$lib/components/DateHighlight.svelte";
  import FlowerStrip from "$lib/components/FlowerStrip.svelte";
  import FormattedDate from "$lib/components/FormattedDate.svelte";
  import PageHeading from "$lib/components/PageHeading.svelte";
  import PixelUs from "$lib/components/PixelUs.svelte";
  import { MEETING_TIME, PARTY_TIME, WEDDING_DAY } from "$lib/dates";
</script>

<main>
  <PageHeading id="page-title" href="/">Save the Date</PageHeading>
  <DateHighlight>
    <p class="date"><FormattedDate date={WEDDING_DAY} /></p>
  </DateHighlight>
  <section aria-label="Countdown" aria-live="polite">
    <Countdown date={MEETING_TIME} />
  </section>
  <div class="buttons">
    <AddToCalendarButton start={MEETING_TIME} end={PARTY_TIME} title="Hochzeit Melanie & Samuel" />
    <Button href="/location-unterkuenfte">📍 Location & Unterkünfte</Button>
  </div>
  <p class="formal-invite-note">Alle Informationen folgen mit der Einladung!</p>
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

  :global(:root) {
    --bottom-art-space: 11rem;
    --people-size: 11rem;
    --flower-strip-height: 4.5rem;
  }

  main {
    display: grid;
    align-content: start;
    justify-items: center;
    gap: 1rem;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 1rem 1rem var(--bottom-art-space);
    text-align: center;
  }

  .date {
    margin: 0;
    font-size: clamp(2.4rem, 7vw, 4.5rem);
    font-weight: 700;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .formal-invite-note {
    margin: 0;
    font-size: 0.95rem;
  }

  .pixel-us {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    width: var(--people-size);
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
