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
	export let product;

	//This is kind of awful but it works
	let currentLargeImageNumber = 1;
	let imageOptions = [1]
	if (product.metadata.largeImage2) { imageOptions.push(2) }
	if (product.metadata.largeImage3) { imageOptions.push(3) }
	if (product.metadata.largeImage4) { imageOptions.push(4) }
	if (product.metadata.largeImage5) { imageOptions.push(5) }

	function setCurrentImage(num) {
		currentLargeImageNumber = num
	}

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

<div class="py-6 px-4 sm:px-0 sm:py-8">
    <div class="px-4 sm:px-0 py-2">
        <div class="font-light text-gray-800 flex flex-col text-sm sm:text-base text-center px-2 sm:px-6">
            <span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">
                {product.metadata.title}
            </span>
						
						<!-- Big gallery image -->
						<div class="relative overflow-hidden pb-2/3 sm:pb-3/5 rounded-md w-auto mt-4 sm:max-h-600">
							<img class="absolute h-full w-full object-cover" src={product.metadata[`largeImage${currentLargeImageNumber}`]} alt={product.metadata.title} />
						</div>

						<!-- Thumbnails -->
						<div class="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 h-32 mt-2 sm:mt-3">
							{#each imageOptions as imageOptionNumber}
								<div
									class="w-full h-full rounded-md bg-gray-300 overflow-hidden hover:opacity-70 transition-opacity duration-100 ease-in-out cursor-pointer"
									on:click={() => {setCurrentImage(imageOptionNumber)}}
								>
									<img class="rounded-md object-cover w-full h-full" src={product.metadata[`largeImage${imageOptionNumber}`]} alt={product.metadata.title} />
								</div>
							{/each}
						</div>

						<div class="markdown text-center pt-4 sm:pt-8">
							{@html product.html}
						</div>

						<span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide text-center pt-4 sm:pt-8">
							{#if product.metadata.sold === 'true'} 
								Sold
							{:else}
								£{product.metadata.price}
							{/if}
						</span>

						{#if product.metadata.sold !== 'true' && product.metadata.paypalLink !== ""} 
							<div class="flex justify-center items-center w-full pt-4 sm:pt-8 pb-4 sm:pb-8">
								<a
									class="w-64 h-12 bg-paypal rounded-md flex justify-center items-center opacity-75 hover:opacity-100 cursor-pointer"
									rel="noreferrer noopener"
        					target="_blank"
									href={product.metadata.paypalLink}
								>
									<img class="w-24" src="paypal_sm.png" alt="Paypal" />
								</a>
							</div>
						{/if}

        </div>
    </div>
</div>