<script lang="ts">
	let {
		children,
	onclick,
	type = "button",
	}: {
		children: import("svelte").Snippet;
		onclick?: (event: MouseEvent) => void;
		type?: "button" | "submit" | "reset";
	} = $props();
</script>

<button {type} {onclick}>
	{@render children()}
</button>

<style>
	button {
		padding: 0.65rem 1rem;
		border: 1px solid var(--color-foreground);
		border-radius: 999px;
		background: transparent;
		color: var(--color-foreground);
		font: inherit;
		cursor: pointer;
		transition: background-color 160ms ease, color 160ms ease;
	}

	button:hover,
	button:focus-visible {
		background: var(--color-foreground);
		color: var(--color-background);
	}
</style>