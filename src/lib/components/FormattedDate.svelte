<script lang="ts">
  import { formatDate } from "$lib/formatters";

  let { date }: { date: Date } = $props();
</script>

<time datetime={date.toISOString()}>{formatDate(date)}</time>
