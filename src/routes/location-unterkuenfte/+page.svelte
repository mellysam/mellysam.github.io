<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import LocationCard from "$lib/components/LocationCard.svelte";
  import edelsbrunner from "$lib/assets/edelsbrunner.jpg";
</script>

<main>
  <h1><a href="/">Location & Unterkünfte</a></h1>

  <section aria-labelledby="location-title">
    <h2 id="location-title">Location</h2>
    <div class="venue-card">
      <LocationCard
        name="Weingut Edelsbrunner"
        description="Let's go party! 🍷"
        imageSrc={edelsbrunner}
        imageAlt="Weingut Edelsbrunner"
        website="https://www.weingut-edelsbrunner.at"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=Weingut%20Edelsbrunner%2C%20Hof%20bei%20Straden%2087%2C%208345%20Straden"
        address={["Hof bei Straden 87", "A-8345 Straden"]}
      />
    </div>
  </section>

  <section aria-labelledby="accommodation-title">
    <h2 id="accommodation-title">Unterkünfte</h2>
    <div class="hotel-cards">
      <LocationCard
        name="Hotel Beispielblick"
        description="Nahe bei der Location."
        website="https://example.com"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=Hotel%20Beispielblick%2C%20Straden"
        address={["Hotelstraße 1", "A-8345 Straden"]}
      />
      <LocationCard
        name="Gästehaus Sonnengarten"
        description="Kleines Gästehaus im Grünen."
        website="https://example.com"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=G%C3%A4stehaus%20Sonnengarten%2C%20Straden"
        address={["Sonnenweg 4", "A-8345 Straden"]}
      />
      <LocationCard
        name="Pension Weinland"
        description="Praktisch in der Umgebung."
        website="https://example.com"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=Pension%20Weinland%2C%20Straden"
        address={["Weinbergweg 7", "A-8345 Straden"]}
      />
    </div>
  </section>

  <Button href="../">← Zurück</Button>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
    gap: 1.25rem;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 2rem 1rem;
    text-align: center;
  }

  h1 {
    font-family: var(--font-script);
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 400;
  }

  h1 a {
    color: inherit;
    text-decoration: none;
  }

  section {
    width: min(100%, 68rem);
  }

  .venue-card {
    max-width: 34rem;
    margin-inline: auto;
  }

  .hotel-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .hotel-cards :global(.card) {
    flex: 1 1 18rem;
    max-width: 22rem;
  }
</style>