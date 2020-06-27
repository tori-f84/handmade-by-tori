<script>
	import PageLayout from '../components/pageLayout.svelte'

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<PageLayout>
	<span slot="title">{status}</span>

	<div slot="content">
		{error.message}
		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</div>

</PageLayout>