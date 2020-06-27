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
	import PageLayout from '../../components/pageLayout.svelte'
	import Card from '../../components/card.svelte'
	export let articles;
</script>

<svelte:head>
	<title>Articles // Matt Brealey</title>
	<meta name="description" content="Hopefully soon to be many articles, written by a freelance creative problem solver." />
	<meta name="keywords" content="space, react, reactjs, threejs, sapper, svelte, sveltejs, ios, swift, 3d, ar, vfx, design"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://mattbrealey.com/articles">
	<meta property="og:title" content="Matt Brealey">
	<meta property="og:description" content="Hopefully soon to be many articles, written by a freelance creative problem solver.">
	<meta property="og:image" content="https://mattbrealey.com/profile.jpg">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://mattbrealey.com/articles">
	<meta property="twitter:title" content="Matt Brealey">
	<meta property="twitter:description" content="Hopefully soon to be many articles, written by a freelance creative problem solver.">
	<meta property="twitter:image" content="https://mattbrealey.com/profile.jpg">
</svelte:head>

<PageLayout>
	<h1 slot="title">Articles</h1>
	<div slot="content">
		<!-- https://tailwindgrids.com/#/ -->
		<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
			{#each articles as article}
				<Card
					date={article.date}
					desc={article.desc}
					link={`./articles/${article.slug}`}
					smallImage={article.smallImage}
					title={article.title}
					timeToRead={article.timeToRead}
				/>
			{/each}
		</div>
	</div>
</PageLayout>
