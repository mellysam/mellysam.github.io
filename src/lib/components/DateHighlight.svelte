<script lang="ts">
  let { children }: { children: import("svelte").Snippet } = $props();
</script>

<div class="date-highlight">
  {@render children()}
</div>

<style>
  @property --gradient-angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  .date-highlight {
    display: inline-block;
    background-image: linear-gradient(
      var(--gradient-angle),
      var(--color-flower-green),
      var(--color-flower-pink),
      var(--color-flower-purple),
      var(--color-flower-blue),
      var(--color-flower-green)
    );
    background-size: 250% 250%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move-gradient 9s ease-in-out infinite alternate,
      rotate-gradient 12s linear infinite;
  }

  @keyframes move-gradient {
    from {
      background-position: 0% 50%;
    }

    to {
      background-position: 100% 50%;
    }
  }

  @keyframes rotate-gradient {
    to {
      --gradient-angle: 360deg;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .date-highlight {
      animation: none;
    }
  }
</style>
