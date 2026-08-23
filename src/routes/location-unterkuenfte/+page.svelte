<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import LocationCard from "$lib/components/LocationCard.svelte";
  import PageHeading from "$lib/components/PageHeading.svelte";
  import edelsbrunner from "$lib/assets/edelsbrunner.jpg";
</script>

<main>
  <PageHeading href="/">Location & Unterkünfte</PageHeading>

  <section aria-labelledby="location-title">
    <h2 id="location-title">Location</h2>
    <div class="venue-card">
      <LocationCard
        name="Weingut Edelsbrunner"
        layout="horizontal"
        description="Let's go party! 🍷"
        imageSrc={edelsbrunner}
        imageAlt="Weingut Edelsbrunner"
        website="https://www.weingut-edelsbrunner.at"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=Weingut%20Edelsbrunner%2C%20Hof%20bei%20Straden%2087%2C%208345%20Straden"
        address={["Hof bei Straden 87", "8345 Straden"]}
      />
    </div>
  </section>

  <section aria-labelledby="accommodation-title">
    <h2 id="accommodation-title">Unterkünfte</h2>
    <p class="accommodation-note">
      Wir empfehlen euch, die Unterkunft bereits zu buchen. Von der Location wird es einen Shuttle-Service zu
      den genannten Hotels geben.
    </p>
    <div class="hotel-cards">
      <LocationCard
        name="JUFA Hotel Tieschen"
        description="Mit Frühstück. Auch Zimmer für Gruppen verfügbar."
        website="https://www.jufahotels.com/hotel/tieschen/"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=JUFA%20Hotel%20Tieschen"
        address={["Patzen 40", "8355 Tieschen"]}
        imageSrc="https://www.jufahotels.com/wp-content/uploads/2024/05/gastgarten-jufa-hotel-tieschen-1-scaled.jpg.webp"
      />
      <LocationCard
        name="Gasthof Wagner"
        description="Mit Frühstück."
        website="https://www.gasthof-wagner.com"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=Gasthof%20Wagner%2C%20Halbenrain"
        address={["Halbenrain 93", "8492 Halbenrain"]}
        imageSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLZxfBgFxWxKdOPKVz1P2CS1YtcIrsKs_HOW8hn4B9LLloMYX7FtL9Fr3tbKCVbG_FMNOrKLgiCoTK1Gql10qLTiIJW55dOuh2w5tvlcNwENTucYltl1Q0nYJbh8-72lDcF1Dk=s680-w680-h510-rw"
      />
      <LocationCard
        name="FeWo Flucher-Plaschg"
        description="Ferienwohnungen, auch für Gruppen."
        website="https://flucher-plaschg.at"
        mapsUrl="https://www.google.com/maps/search/?api=1&query=Ferienwohnungen%20Flucher-Plaschg%2C%20Straden"
        address={["Hof 71", "8345 Straden"]}
        imageSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6FS2CTI-7ccEWgRTgv_nOyPVI4YM03CYAL6tyYu6buFbW1q_bku6PuHp_Gri8uXBydkMDJERN5iKX2e52MklUQoO91IqLswomXUH9jC66LESUGD2N-0-1aDFtsLwmZpII3drC=s680-w680-h510-rw"
      />
    </div>
  </section>

  <Button href="../">Zurück</Button>
</main>

<style>
  main {
    display: grid;
    align-content: start;
    justify-items: center;
    gap: 1.25rem;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 2rem 1rem;
    text-align: center;
  }

  section {
    width: min(100%, 68rem);
  }

  .venue-card {
    max-width: 56rem;
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

  .accommodation-note {
    max-width: 36rem;
    margin: 0 auto 1rem;
  }
</style>