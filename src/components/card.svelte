<script>
    export let date
    export let desc
    export let link
    export let smallImage
    export let title
    export let timeToRead
</script>

<div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
    <div class="group flex flex-col relative h-full cursor-pointer">
        <a rel="prefetch" href={link} class="absolute w-full h-full z-10"> </a>
        <div class="relative pb-2/3 rounded-md overflow-hidden group-hover:opacity-90 transition-opacity duration-100 ease-in-out">
            <img class="absolute h-full w-full object-cover bg-gray-300" src={smallImage} alt={title} />
        </div>
        {#if date || timeToRead}
            <div class="mt-2 font-light text-xs text-gray-500 flex justify-between">
                {#if date}
                    <span>{date}</span>
                {/if}
                {#if timeToRead}
                    <span class="text-right">{timeToRead} mins to read</span>
                {/if}
            </div>
        {/if}
        <div class="font-semibold text-gray-900 group-hover:text-pink-500">{title}</div>
        <span class="text-sm text-gray-800">{desc}</span>
    </div>
</div>