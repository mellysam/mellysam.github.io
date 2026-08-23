<script lang="ts">
  let {
    children,
    href,
    id,
  }: {
    children: import("svelte").Snippet;
    href?: string;
    id?: string;
  } = $props();
</script>

<h1 {id}>
  {#if href}
    <a {href}>{@render children()}</a>
  {:else}
    {@render children()}
  {/if}
</h1>

<style>
  h1 {
    font-family: var(--font-script);
    font-size: clamp(3.6rem, 11vw, 7rem);
    font-weight: 400;
    margin: 2rem 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>