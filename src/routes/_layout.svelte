<!-- https://github.com/sveltejs/sapper-template/issues/188 -->
<!-- https://github.com/sveltejs/sapper/issues/703 -->

<script context="module">
	export async function preload({ params, query }, session) {
		return this.fetch(`articles.json`)
			.then(r => r.json())
			.then(articles => {

				//Populate projects from backend
				const projects = Object.keys(session.projects).map(projectSlug => session.projects[projectSlug])
				return { 
					articles,
					projects
				};
		});
	}
</script>


<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	export var projects;
	export var articles;
	export var segment;
</script>

<div class="flex flex-col min-h-full bg-blue-200">
	<Header />
	<main class="container mx-auto flex-grow pt-16 sm:pt-0">
		<div class="font-normal text-gray-900 text-base sm:text-base p-6 flex lg:p-8">
			<div class="w-full sm:w-4/5 font-light">
				<slot></slot>
			</div>
		</div>
	</main>

	<Footer />
</div>