<script lang="ts">
	import flowers from "$lib/assets/flowers.png";
</script>

<div class="flowers" aria-hidden="true" style={`background-image: url(${flowers})`}></div>

<style>
	.flowers {
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		height: 8rem;
		background-repeat: repeat-x;
		background-position: bottom left;
		background-size: auto 100%;
		pointer-events: none;
	}
</style>