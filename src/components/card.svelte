<script>
    export let link
    export let smallImage
    export let title
    export let price
    export let sold
</script>

<div class="overflow-hidden">
    <div class="group flex flex-col relative h-full cursor-pointer">
        <a rel="prefetch" href={link} class="absolute w-full h-full z-10"> </a>
        <div class="relative pb-4/5 rounded-md overflow-hidden group-hover:opacity-90 transition-opacity duration-100 ease-in-out">
            <img class="absolute h-full w-full object-cover bg-gray-300" src={smallImage} alt={title} />
        </div>
        <div class="flex pt-2 justify-between items-center">
            <div class="text-toriAccent group-hover:text-blue-500 text-sm font-medium">{title}</div>
        </div>
        <div class="flex text-sm text-gray-800 font-light">
            <span class="{sold && "line-through"}">£{price}</span>
            {#if sold}
                <span class="pl-2">SOLD</span>
            {/if}
        </div>
    </div>
</div>