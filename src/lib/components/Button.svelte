<script lang="ts">
  let {
    children,
    href,
    onclick,
    rel,
    target,
    type = "button",
  }: {
    children: import("svelte").Snippet;
    href?: string;
    onclick?: (event: MouseEvent) => void;
    rel?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    type?: "button" | "submit" | "reset";
  } = $props();
</script>

{#if href}
  <a class="button" {href} {rel} {target}>
    {@render children()}
  </a>
{:else}
  <button class="button" {type} {onclick}>
    {@render children()}
  </button>
{/if}

<style>
  .button {
    display: inline-block;
    padding: 0.65rem 1rem;
    border: 1px solid var(--color-foreground);
    border-radius: 999px;
    background: transparent;
    color: var(--color-foreground);
    font: inherit;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition:
      background-color 160ms ease,
      color 160ms ease;
  }

  .button:hover,
  .button:focus-visible {
    background: var(--color-foreground);
    color: var(--color-background);
  }
</style>
