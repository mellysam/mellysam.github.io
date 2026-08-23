<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}

<style>
  :global(:root) {
    --color-background: #fffaf2;
    --color-foreground: #231f1b;
    --color-flower-green: #1f6f36;
    --color-flower-pink: #d94f9f;
    --color-flower-purple: #7c5bd6;
    --color-flower-blue: #2f6fe4;
    --font-script: "Great Vibes", cursive;
  }

  :global(body) {
    background: var(--color-background);
    color: var(--color-foreground);
    font-family: "Playfair Display", Georgia, serif;
  }
</style>
