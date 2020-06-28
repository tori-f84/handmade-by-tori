
<script>
    //Grab the active route
    import { stores } from '@sapper/app'
    const { page } = stores()

    //Match the current route to the available options
    // TODO : svelte should declare these vars for us in the $: statement, but I'm getting undeclared errors
    let isShop;
    let isAboutMe;
    $: {
        //Dynamically update the vars to match the current route
        isShop = $page.path === "/"
        isAboutMe = $page.path === "/aboutMe"
    }

    //Close the menu on route change
    let oldRoute = $page.path
    $: {
        //If the route has changed
        if (oldRoute !== $page.path) { 
            //Store the new route, and close the menu
            oldRoute = $page.path
        }
    }

</script>

<header class="bg-white pt-4 pb-6 w-full flex items-center">
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center">
        <div class="w-full flex flex-col items-center justify-center sm:justify-between px-4 sm:p-0">
            <a href="/" alt="Home">
                <img class="h-24 sm:h-32 rounded-full" src="logoWithText.png" alt="Handmade by Tori" />
            </a>
            <div class="flex text-toriBG text-sm pt-3">
                <a href="/" class="text-toriAccent {isShop ? "opacity-100 underline" : "opacity-75"} hover:opacity-100 hover:underline">Shop</a>
                <a href="/aboutMe" class="pl-6 text-toriAccent opacity-60 {isAboutMe ? "opacity-100 underline" : "opacity-75"} hover:opacity-100 hover:underline">About me</a>
            </div>
        </div>
    </div>
</header>