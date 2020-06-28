<!-- https://github.com/sveltejs/sapper-template/issues/188 -->
<!-- https://github.com/sveltejs/sapper/issues/703 -->

<script context="module">
	export async function preload({ params, query }, session) {
		return this.fetch(`articles.json`)
			.then(r => r.json())
			.then(articles => {
				return { 
					articles
				};
		});
	}
</script>


<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	export var articles;
	export var segment;
</script>

<div class="flex flex-col min-h-full bg-gray-100">
	<Header />
	<main class="container mx-auto flex-grow">
		<slot></slot>
	</main>

	<Footer />
</div>