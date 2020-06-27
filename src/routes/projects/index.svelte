<script context="module">
	//Populate the projects from the session
	export async function preload(page, session) {
		return {
			projects: Object.keys(session.projects).map(projectSlug => session.projects[projectSlug])
		}
	}
</script>

<script>
	import PageLayout from '../../components/pageLayout.svelte'
	import Card from '../../components/card.svelte'
	export let projects
</script>

<svelte:head>
	<title>Projects // Matt Brealey</title>
	<meta name="description" content="Mainly space-based projects, created by a freelance creative problem solver." />
	<meta name="keywords" content="space, react, reactjs, threejs, sapper, svelte, sveltejs, ios, swift, 3d, ar, vfx, design"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://mattbrealey.com/projects">
	<meta property="og:title" content="Matt Brealey">
	<meta property="og:description" content="Mainly space-based projects, created by a freelance creative problem solver.">
	<meta property="og:image" content="https://mattbrealey.com/profile.jpg">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://mattbrealey.com/projects">
	<meta property="twitter:title" content="Matt Brealey">
	<meta property="twitter:description" content="Mainly space-based projects, created by a freelance creative problem solver.">
	<meta property="twitter:image" content="https://mattbrealey.com/profile.jpg">
</svelte:head>

<PageLayout>
	<span slot="title">Projects</span>

	<div slot="content">
		<!-- https://tailwindgrids.com/#/ -->
		<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">

			{#each projects as project}
				<Card
					desc={project.shortDesc}
					link={`./projects/${project.slug}`}
					smallImage={project.smallImage}
					title={project.name}
				/>
			{/each}

		</div>
	</div>
</PageLayout>