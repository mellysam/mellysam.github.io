<script lang="ts">
  import Countdown from "$lib/components/Countdown.svelte";
  import FlowerStrip from "$lib/components/FlowerStrip.svelte";
  import FormattedDate from "$lib/components/FormattedDate.svelte";
  import FormattedTime from "$lib/components/FormattedTime.svelte";
  import { FOOD_TIME, MEETING_TIME, PARTY_TIME, TRAUUUNG_TIME, WEDDING_DAY } from "$lib/dates";
</script>

<main>
  <section aria-labelledby="page-title">
    <p>Save the date</p>
    <h1 id="page-title"><FormattedDate date={WEDDING_DAY} /></h1>
    <p>Meet at <FormattedTime date={MEETING_TIME} /></p>
  </section>

  <section aria-labelledby="timeline-title">
    <h2 id="timeline-title">Rough timeline</h2>
    <ol>
      <li>
        <FormattedTime date={MEETING_TIME} />
        <span>Meet up</span>
      </li>
      <li>
        <FormattedTime date={TRAUUUNG_TIME} />
        <span>Ceremony</span>
      </li>
      <li>
        <FormattedTime date={FOOD_TIME} />
        <span>Dinner</span>
      </li>
      <li>
        <FormattedTime date={PARTY_TIME} />
        <span>Party</span>
      </li>
    </ol>
  </section>

  <section aria-labelledby="countdown-title" aria-live="polite">
    <p id="countdown-title">Countdown to meeting time</p>
    <Countdown date={MEETING_TIME} />
  </section>
</main>

<FlowerStrip />

<style>
  :global(body) {
    margin: 0;
  }

  main {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 2rem 1rem 10rem;
    text-align: center;
  }

  ol {
    display: inline-block;
    padding-left: 1.5rem;
    text-align: left;
  }
</style>
