<script context="module">
	export async function preload({ params, query }, session) {
        // the `slug` parameter is available because
        // this file is called [slug].html

        //Define a function to find a project with given ID
        const getProjectWithID = (id) => {
            let projectKey = Object.keys(session.projects).find(projectKey => session.projects[projectKey].id == id)
            if (projectKey) { return session.projects[projectKey] }
            return null
        }

        //If the project exists
        if (session.projects.hasOwnProperty(params.slug)) {
            // Return the project along with the prev/next projects for display at the bottom of the page
            const project = session.projects[params.slug]
            return { 
                project,
                prevProject: getProjectWithID(project.id - 1),
                nextProject: getProjectWithID(project.id + 1)
            };
        } else {
            //404
            this.error(404, `I haven't made a project called ${params.slug}. Yet...`);            
        }
    };

</script>


<script>
    import PageLayout from '../../components/pageLayout.svelte'

    // Get the project with the matching slug
    export let project = null
    export let prevProject = null;
    export let nextProject = null;

    //Update the header string
    let headerString = "Matt Brealey"
    $: headerString = project ? `${project.name} // Matt Brealey` : "Matt Brealey"

    // TODO : Add related posts based upon article tags
    let relatedPosts = []
</script>

<svelte:head>
    <title>{headerString}</title>
    <meta name="description" content="{project.shortDesc}" />
	<meta name="keywords" content="{project.keywords}"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://mattbrealey.com/projects/{project.slug}">
	<meta property="og:title" content="{project.name}">
	<meta property="og:description" content="{project.shortDesc}">
	{#if project.smallImage}
	    <meta property="og:image" content="https://mattbrealey.com/{project.smallImage}">
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://mattbrealey.com/projects/{project.slug}">
	<meta property="twitter:title" content="{project.name}">
	<meta property="twitter:description" content="{project.shortDesc}">
	{#if project.smallImage}
	    <meta property="twitter:image" content="https://mattbrealey.com/{project.smallImage}">
	{/if}
</svelte:head>

<PageLayout>
    <span slot="title">{project.name}</span>
    <div slot="content">

        <a href="{project.links[0].url}" target="_blank" rel="noopener noreferrer">
            <img class="rounded-md object-cover" src={project.largeImage} alt={project.name} />
        </a>

        <h2 id="links" class="mt-6 text-xl text-pink-600 font-light">{project.links.length > 1 ? "Links" : "Link"}</h2>
        <ul>
        {#each project.links as link}
            <li>
                {link.title} : <a class="pl-2 colorLink" href={link.url} target="_blank" rel="noopener noreferrer">{link.url.split("//")[1]}</a>
            </li>
        {/each}
        </ul>

        <h2 id="what-is-it" class="mt-6 text-xl text-pink-600 font-light">What is it?</h2>
        <p class="mt-2 markdown">{@html project.desc}</p>

        {#if project.features.length}
            <h2 id="features" class="mt-6 text-xl text-pink-600 font-light">Features</h2>
            <!-- https://tailwindgrids.com/#/ -->
            <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
                {#each project.features as feature}
                    <div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
                        <div class="flex flex-col relative h-full">
                            <div class="relative pb-2/3 rounded-md overflow-hidden">
                                {#if feature.image}
                                    <img class="absolute h-full w-full object-cover" src={feature.image} alt={feature.desc} />
                                {:else if feature.video}
                                    <video autoplay loop class="absolute h-full w-full">
                                        <source src={feature.video} type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                {/if}
                            </div>
                            <div class="font-semibold mt-1 text-gray-900 group-hover:text-pink-500">{feature.title}</div>
                            <span class="text-sm text-gray-800">{@html feature.desc}</span>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}

        {#if project.todos.length}
            <h2 id="todo-list" class="mt-6 text-xl text-pink-600 font-light">Todo List</h2>
            <ul class="list-disc">
                {#each project.todos as todo}
                    <li class="ml-6">{todo}</li>
                {/each}
            </ul>
        {/if}
        
        {#if relatedPosts.length}
            <h2 id="related-posts" class="mt-6 text-xl text-pink-600 font-light">Related Posts</h2>
        {/if}

        <hr class="mt-12 w-full"/>
        <div class="flex justify-between pt-2">
            <div class="flex-1 pr-6">
                {#if prevProject}
                    <h3 class="text-sm text-gray-600">Previous Project</h3>
                    <a href="./projects/{prevProject.slug}" class="colorLink">{prevProject.name}</a>
                {/if}
            </div>
            <div class="flex-1 text-right pl-6">
                {#if nextProject}
                    <h3 class="text-sm text-gray-600">Next Project</h3>
                    <a href="./projects/{nextProject.slug}" class="colorLink">{nextProject.name}</a>
                {/if}
            </div>
        </div>
    </div>
</PageLayout>