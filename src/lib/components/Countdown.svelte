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
  <strong>{countdown.days}</strong> Tage
  <strong>{countdown.hours}</strong> Stunden
  <strong>{countdown.minutes}</strong> Minuten
  <strong>{countdown.seconds}</strong> Sekunden
</p>
