<script lang="ts">
  import { formatTime } from "$lib/formatters";

  let { date }: { date: Date } = $props();
</script>

<time datetime={date.toISOString()}>{formatTime(date)}</time>
