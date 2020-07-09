<svelte:head>
  <title>Handmade by Tori</title>
  <!-- <meta name="description" content="The portfolio site of a freelance creative problem solver." />
  <meta name="keywords" content="space, react, reactjs, threejs, sapper, svelte, sveltejs, ios, swift, 3d, ar, vfx, design"/> -->

  <!-- Open Graph / Facebook -->
  <!-- <meta property="og:type" content="website">
  <meta property="og:url" content="https://mattbrealey.com">
  <meta property="og:title" content="Matt Brealey">
  <meta property="og:description" content="The portfolio site of a freelance creative problem solver.">
  <meta property="og:image" content="https://mattbrealey.com/profile.jpg">

  <!-- Twitter -->
  <!-- <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://mattbrealey.com">
  <meta property="twitter:title" content="Matt Brealey">
  <meta property="twitter:description" content="The portfolio site of a freelance creative problem solver.">
  <meta property="twitter:image" content="https://mattbrealey.com/profile.jpg"> --> -->
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
	<!-- https://tailwindgrids.com/#/ -->
	<div class="font-light text-gray-800 flex flex-col text-sm sm:text-base text-center px-2 sm:px-6">
		<span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">Bespoke jewellery, <br class="sm:hidden"/>inspired by the coast.</span>
		<p>In my other life l've been working for a marine conservation organisation, and have been fortunate enough to travel to many far-flung places, all of which have the sea in common.
		The ocean has been a life-giver and constant source of inspiration, including for my designs.</p>
		<p class="mt-6">I fell in love with <i>chrysoprase</i>, a particularly beautiful stone the hues, depths and peculiarities of which vary enormously between each piece, reminiscent of the colours of the ocean.
		My preferred setting is backless, which takes a little longer to create, but is worth it to show off both sides of the stones - often the back is a beautiful as the front!</p>
	</div>

	<hr class="my-8 sm:my-10"/>

	<div class="overflow-hidden grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
		{#each products as product}
			<Card
				link={`./products/${product.slug}`}
				smallImage={product.smallImage}
				title={product.title}
				price={product.price}
				sold={product.sold}
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