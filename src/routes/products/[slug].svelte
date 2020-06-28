<script context="module">

	export async function preload({ params, query }) {
			// the `slug` parameter is available because
			// this file is called [slug].html
			const res = await this.fetch(`./products/${params.slug}.json`);
			const data = await res.json();

			if (res.status === 200) {
				return { product: data };
			} else {
				this.error(res.status, data.message);
			}
		};

</script>

<script>
  import ProductLayout from '../../components/productLayout.svelte'
	export let product;
</script>

<svelte:head>
	<title>{product.metadata.title} // Matt Brealey</title>
	<meta name="description" content="{product.metadata.desc}" />
	<meta name="keywords" content="{product.metadata.keywords}"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://mattbrealey.com/products/{product.slug}">
	<meta property="og:title" content="{product.metadata.title}">
	<meta property="og:description" content="{product.metadata.desc}">
	<meta property="og:image" content="https://mattbrealey.com/{product.metadata.smallImage}">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://mattbrealey.com/products/{product.slug}">
	<meta property="twitter:title" content="{product.metadata.title}">
	<meta property="twitter:description" content="{product.metadata.desc}">
	<meta property="twitter:image" content="https://mattbrealey.com/{product.metadata.smallImage}">
</svelte:head>

<ProductLayout>
	<span slot="title">{product.metadata.title}</span>
    <section slot="content">

		{#if product.largeImage}
			<img class="rounded-md object-cover w-auto max-h-sm" src={product.metadata.largeImage} alt={product.metadata.title} />
		{/if}

		<span class="markdown">
			{@html product.html}
		</span>
	</section>
</ProductLayout>    
