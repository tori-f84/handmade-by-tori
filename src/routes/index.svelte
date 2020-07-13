<svelte:head>
  <title>Handmade by Tori</title>
	<meta name="description" content="Bespoke, handmade jewellery, inspired by the coast." />
	<meta name="keywords" content="handmade, bespoke, jewellery, coast, silver, tori, crysoprase, australia, stone, gemstone, precious, necklace, ring, earrings, pendant, gifts for her, ocean, sea, waves, shore, fossil, ammonite, stirling, stirling silver, fine silver, shell, beach"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.handmadebytori.com">
	<meta property="og:title" content="Handmade by Tori">
	<meta property="og:description" content="Bespoke, handmade jewellery, inspired by the coast.">
	<meta property="og:image" content="https://www.handmadebytori.com/logoWithText.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://www.handmadebytori.com">
	<meta property="twitter:title" content="Handmade by Tori">
	<meta property="twitter:description" content="Bespoke, handmade jewellery, inspired by the coast.">
	<meta property="twitter:image" content="https://www.handmadebytori.com/logoWithText.png">
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`products.json`).then(
			r => r.json()
		).then(products => {
			return { products };
		});
	}
</script>

<script>
  import { onMount } from 'svelte'
	import Card from '../components/card.svelte'

	export let products
	
</script>


<div class="py-6 px-4 sm:px-0 sm:py-8">
	<div class="font-light text-gray-800 flex flex-col text-sm sm:text-base text-center px-2 sm:px-6">
		<span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">Bespoke, handmade jewellery, <br class="sm:hidden"/>inspired by the coast</span>
		<p>All of my jewellery is hand-made the slow way, and my pieces are unique. All the stones I use are one of a kind and the shell-based jewellery is formed from shells and fossils I have collected myself. I also take commissions.</p>
	</div>

	<hr class="my-8 sm:my-10"/>

	<div class="overflow-hidden grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
		{#each products as product}
			<Card
				link={`./products/${product.slug}`}
				thumb={product.metadata.thumbImage1}
				title={product.metadata.title}
				price={product.metadata.price}
				sold={product.metadata.sold === "true"}
			/>
		{/each}
	</div>

	<hr class="my-8 sm:my-10"/>

	<div class="font-light text-gray-800 flex flex-col text-sm sm:text-base text-center px-2 sm:px-6">
		<span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">Commissions</span>
		<p>I can adjust ring sizes or create something entirely custom with a stone of your choosing from my collection. Contact me below for more details.</p>
		<p class="mt-6">You can also
		<a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/handmade_bytori" class="text-toriAccent opacity-75 hover:opacity-100 cursor-pointer underline">follow me on instagram</a>
		for a wider selection of my work and a wider choice of stones.</p>
	</div>

	<div class="flex justify-center items-center mt-8 pb-4">
			<button type="button" class="p-4 text-gray-200 bg-toriAccent rounded-lg sm:opacity-75 hover:opacity-100">
				<a href="mailto:ishandmadebytori@gmail.com">Contact Me</a>
			</button>
	</div>
</div>