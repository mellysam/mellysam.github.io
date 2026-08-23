<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  type Props = {
    address: string[];
    description: string;
    imageAlt?: string;
    imageSrc?: string;
    layout?: "vertical" | "horizontal";
    mapsUrl: string;
    name: string;
    website: string;
  };

  let {
    address,
    description,
    imageAlt,
    imageSrc,
    layout = "vertical",
    mapsUrl,
    name,
    website,
  }: Props = $props();
</script>

<article class="card" class:horizontal={layout === "horizontal"}>
  {#if imageSrc}
    <img src={imageSrc} alt={imageAlt ?? ""} />
  {:else}
    <div class="image-placeholder" aria-hidden="true">Bild folgt</div>
  {/if}
  <div class="content">
    <h3>{name}</h3>
    <p>{description}</p>
    <address>
      {#each address as line}
        <span>{line}</span>
      {/each}
    </address>
    <div class="actions">
      <Button href={website} target="_blank" rel="noreferrer">Website</Button>
      <Button href={mapsUrl} target="_blank" rel="noreferrer">Karte</Button>
    </div>
  </div>
</article>

<style>
  .card {
    display: grid;
    gap: 0.85rem;
    width: 100%;
    box-sizing: border-box;
    padding: 1.25rem;
    border: 1px solid color-mix(in srgb, var(--color-foreground) 14%, transparent);
    border-radius: 0.75rem;
    background: color-mix(in srgb, var(--color-background) 85%, white);
  }

  .content {
    display: grid;
    align-content: center;
    gap: 0.85rem;
  }

  h3 {
    margin: 0;
    font-size: 1.35rem;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .image-placeholder {
    display: grid;
    place-items: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 1px dashed color-mix(in srgb, var(--color-foreground) 30%, transparent);
    border-radius: 0.5rem;
    color: color-mix(in srgb, var(--color-foreground) 65%, transparent);
  }

  p {
    margin: 0;
  }

  address {
    display: grid;
    gap: 0.15rem;
    font-style: normal;
  }

  .actions {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.35rem;
    font-size: 0.85rem;
  }

  @media (min-width: 44rem) {
    .horizontal {
      grid-template-columns: minmax(18rem, 1fr) minmax(16rem, 0.9fr);
      align-items: center;
      text-align: left;
    }

    .horizontal .actions {
      justify-content: start;
    }
  }
</style>