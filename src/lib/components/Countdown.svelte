<script lang="ts">
  import { onMount } from "svelte";

  let { date }: { date: Date } = $props();
  let now = $state(new Date());

  const countdown = $derived.by(() => {
    const remainingMilliseconds = Math.max(0, date.getTime() - now.getTime());
    const days = Math.floor(remainingMilliseconds / 86_400_000);
    const hours = Math.floor((remainingMilliseconds % 86_400_000) / 3_600_000);
    const minutes = Math.floor((remainingMilliseconds % 3_600_000) / 60_000);
    const seconds = Math.floor((remainingMilliseconds % 60_000) / 1_000);

    return { days, hours, minutes, seconds };
  });

  onMount(() => {
    const timer = window.setInterval(() => {
      now = new Date();
    }, 1_000);

    return () => window.clearInterval(timer);
  });
</script>

<p>
  <span class="part"><strong>{countdown.days}</strong><span>Tage</span></span>
  <span class="part"><strong>{countdown.hours}</strong><span>Stunden</span></span>
  <span class="part"><strong>{countdown.minutes}</strong><span>Minuten</span></span>
  <span class="part"><strong>{countdown.seconds}</strong><span>Sekunden</span></span>
</p>

<style>
  p {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    gap: 0.75rem;
  }

  .part {
    display: inline-grid;
    gap: 0.15rem;
    min-width: 6.5rem;
    text-align: center;
  }

  strong {
    display: block;
    font-size: clamp(2rem, 7vw, 4rem);
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }
</style>
