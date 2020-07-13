<script context="module">
	export async function preload({ params, query }, session) {
		return this.fetch(`products.json`)
			.then(r => r.json())
			.then(products => {
				return { 
					products
				};
		});
	}
</script>


<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	export var products;
</script>

<div class="flex flex-col min-h-full bg-gray-100">
	<Header />
	<main class="container mx-auto flex-grow">
		<slot></slot>
	</main>

	<Footer />
</div>