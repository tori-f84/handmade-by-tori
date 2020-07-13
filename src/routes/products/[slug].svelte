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

	let imageOptions = [1]
	if (product.metadata.largeImage2 !== "null") { imageOptions.push(2) }
	if (product.metadata.largeImage3 !== "null") { imageOptions.push(3) }
	if (product.metadata.largeImage4 !== "null") { imageOptions.push(4) }
	if (product.metadata.largeImage5 !== "null") { imageOptions.push(5) }

	function setCurrentImage(num) {
		currentLargeImageNumber = num
	}

	//This is kind of awful but it works
	let currentLargeImageNumber = 1;

</script>

<svelte:head>
	<title>{product.metadata.title} // Handmade by Tori</title>
</svelte:head>

<div class="py-6 px-4 sm:px-0 sm:py-8">
    <div class="px-4 sm:px-0 py-2">
        <div class="font-light text-gray-800 flex flex-col text-sm sm:text-base text-center px-2 sm:px-6">
            <span class="text-2xl sm:text-4xl sm:font-thin text-toriAccent tracking-wide pb-2">
                {product.metadata.title}
            </span>
						
						<div class="relative overflow-hidden pb-2/3 sm:pb-1/2 rounded-md w-auto mt-4 sm:max-h-600">
							<img class="absolute h-full w-full object-cover" src="./{product.metadata[`largeImage${currentLargeImageNumber}`]}" alt={product.metadata.title} />
						</div>

						{#if imageOptions.length > 1}
							<div class="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mt-2 sm:mt-3">
								{#each imageOptions as imageOptionNumber}
									<div
										class="w-full rounded-md bg-gray-300 overflow-hidden hover:opacity-70 transition-opacity duration-100 ease-in-out cursor-pointer relative pb-1/2"
										on:click={() => {setCurrentImage(imageOptionNumber)}}
									>
										<img class="absolute rounded-md object-cover w-full h-full" src="./{product.metadata[`thumbImage${imageOptionNumber}`]}" alt={product.metadata.title} />
									</div>
								{/each}
							</div>
						{/if}

						<div class="markdown text-center mt-8">
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