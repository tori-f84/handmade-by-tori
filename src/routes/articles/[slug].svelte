<script context="module">

	export async function preload({ params, query }) {
			// the `slug` parameter is available because
			// this file is called [slug].html
			const res = await this.fetch(`./articles/${params.slug}.json`);
			const data = await res.json();

			if (res.status === 200) {
				return { article: data };
			} else {
				this.error(res.status, data.message);
			}
		};

</script>

<script>
    import ArticleLayout from '../../components/articleLayout.svelte'
	export let article;
</script>

<svelte:head>
	<title>{article.metadata.title} // Matt Brealey</title>
	<meta name="description" content="{article.metadata.desc}" />
	<meta name="keywords" content="{article.metadata.keywords}"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://mattbrealey.com/articles/{article.slug}">
	<meta property="og:title" content="{article.metadata.title}">
	<meta property="og:description" content="{article.metadata.desc}">
	<meta property="og:image" content="https://mattbrealey.com/{article.metadata.smallImage}">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://mattbrealey.com/articles/{article.slug}">
	<meta property="twitter:title" content="{article.metadata.title}">
	<meta property="twitter:description" content="{article.metadata.desc}">
	<meta property="twitter:image" content="https://mattbrealey.com/{article.metadata.smallImage}">
</svelte:head>

<ArticleLayout>
	<span slot="title">{article.metadata.title}</span>
    <section slot="content">

		{#if article.largeImage}
			<img class="rounded-md object-cover w-auto max-h-sm" src={article.metadata.largeImage} alt={article.metadata.title} />
		{/if}

		<span class="markdown">
			{@html article.html}
		</span>
		
		{#if (article.prev || article.next)}
			<hr class="mt-12 w-full"/>
			<div class="flex justify-between pt-2">
				<div class="flex-1 pr-6">
					{#if article.prev}
						<h3 class="text-sm text-gray-600">Previous Article</h3>
						<a href="./articles/{article.prev.slug}" class="colorLink">{article.prev.title}</a>
					{/if}
				</div>
				<div class="flex-1 text-right pl-6">
					{#if article.next}
						<h3 class="text-sm text-gray-600">Next Article</h3>
						<a href="./articles/{article.next.slug}" class="colorLink">{article.next.title}</a>
					{/if}
				</div>
			</div>
		{/if}

	</section>
</ArticleLayout>    
