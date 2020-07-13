<svelte:head>
  <title>Handmade by Tori</title>
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
		<span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">Bespoke jewellery, <br class="sm:hidden"/>inspired by the coast.</span>
		<p>All of my jewellery is hand-made the slow way, and my pieces are unique. All the stones I use are one of a kind and the shell-based jewellery is based on shells and fossils I have collected myself. I also take commissions.</p>
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
		<p>I can adjust ring sizes or create something entirely custom with a stone of your choosing from my collection. Contact me below for more details.
		You can also follow me on instagram for a wider selection of my work and a wider choice of stones.</p>
	</div>

	<div class="flex justify-center items-center mt-8 pb-4">
			<button type="button" class="p-4 text-gray-200 bg-toriAccent rounded-lg sm:opacity-75 hover:opacity-100">
				<a href="#">Contact Me</a>
			</button>
	</div>
</div>