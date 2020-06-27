<script>
    export let date;
    export let timeToRead;
</script>

<div>
    <div class="mb-4 sm:mb-6 flex w-full flex-col">
        <h1 class="text-3xl text-pink-600 font-thin sm:leading-6 mb-1 sm:mb-3 flex-1">
            <slot name="title">No Title Given</slot>
        </h1>
        <div class="font-light text-xs text-gray-500">{date} - {timeToRead} mins to read</div>
    </div>
    <slot name="content">No Content Found</slot>
</div>