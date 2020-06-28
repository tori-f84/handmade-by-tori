
<script>
    //Grab the active route
    import { stores } from '@sapper/app'
    const { page } = stores()

    //Match the current route to the available options
    // TODO : svelte should declare these vars for us in the $: statement, but I'm getting undeclared errors
    let isIndex;
    let isAbout;
    $: {
        //Dynamically update the vars to match the current route
        isIndex = $page.path === "/"
        isAbout = $page.path === "/about"
    }

    //Store the mobile menu open state
    var isOpen = false;

    //Close the menu on route change
    let oldRoute = $page.path
    $: {
        //If the route has changed
        if (oldRoute !== $page.path) { 
            //Store the new route, and close the menu
            oldRoute = $page.path
            isOpen = false
        }
    }

</script>

<header class="bg-gray-100 fixed sm:relative z-10 w-full h-16 sm:h-20 flex items-center">
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center">
        <div class="flex items-center justify-between px-4 sm:p-0">
            <div class="flex justify-center items-center">
                <a href="/" alt="Home">
                    <img class="h-12 rounded-full" src="logo.jpg" alt="A picture of Matt Brealey's head" />
                </a>
                <span class="pl-4 text-xl font-light">Handmade by Tori</span>
            </div>
            <div class="sm:hidden">
                <button type="button" id="menuButton" class="block text-black hover:text-gray-800 focus:text-gray-800 focus:outline-none pr-2" on:click={() => {isOpen = !isOpen}}>
                    <svg class="h-8 w-8 fill-current {isOpen ? 'text-pink-600' : 'text-black'}" viewBox="0 0 100 70">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
            </div>
        </div>
        <div class="px-2 pt-2 pb-6 {isOpen ? 'block' : 'hidden'} sm:flex sm:p-0">
            <a href="/" class="headerLink colorLink {isIndex && "headerLinkActive"}">Shop</a>
            <a href="/projects" id="projectsMenuItem" class="headerLink colorLink {isAbout && "headerLinkActive"}">About Me</a>
        </div>
    </div>
</header>