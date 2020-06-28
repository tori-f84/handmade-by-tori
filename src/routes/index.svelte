<svelte:head>
  <title>Handmade by Tori</title>
  <meta name="description" content="The portfolio site of a freelance creative problem solver." />
  <meta name="keywords" content="space, react, reactjs, threejs, sapper, svelte, sveltejs, ios, swift, 3d, ar, vfx, design"/>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://mattbrealey.com">
  <meta property="og:title" content="Matt Brealey">
  <meta property="og:description" content="The portfolio site of a freelance creative problem solver.">
  <meta property="og:image" content="https://mattbrealey.com/profile.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://mattbrealey.com">
  <meta property="twitter:title" content="Matt Brealey">
  <meta property="twitter:description" content="The portfolio site of a freelance creative problem solver.">
  <meta property="twitter:image" content="https://mattbrealey.com/profile.jpg">
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`articles.json`).then(
			r => r.json()
		).then(articles => {
			return { articles };
		});
	}
</script>

<script>
  import { onMount } from 'svelte'
	import Card from '../components/card.svelte'
	export let articles
</script>


<div class="py-4 px-4 sm:px-0 sm:py-8">
	<!-- https://tailwindgrids.com/#/ -->
	<div class="font-light text-gray-800 flex flex-col text-sm sm:text-base">
		<span class="text-xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">Bespoke jewellery, inspired by nature.</span>
		An intro paragraph maybe, containing some words describing some things about some stuff. Maybe a second sentence that causes everything to wrap around on desktop. 
		Basically just enough so that people know there's stuff to buy down there.
	</div>

	<hr class="my-6 sm:my-8"/>

	<div class="overflow-hidden grid grid-cols-2 gap-4 sm:grid-cols-3">
		{#each articles as article}
			<Card
				link={`./articles/${article.slug}`}
				smallImage={article.smallImage}
				title={article.title}
			/>
		{/each}
		{#each articles as article}
			<Card
				link={`./articles/${article.slug}`}
				smallImage={article.smallImage}
				title={article.title}
			/>
		{/each}
		{#each articles as article}
			<Card
				link={`./articles/${article.slug}`}
				smallImage={article.smallImage}
				title={article.title}
			/>
		{/each}
	</div>
</div>