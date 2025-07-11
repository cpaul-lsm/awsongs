<script lang="ts">
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';

	const { page } = getStores();
	const { data } = $props();
	let requests = data.requests || [];
	let rId = $state('');

	// Get URL parameter `rID` and set it to `rId`
	onMount(() => {
		if ($page.url.searchParams.has('rId')) {
			rId = $page.url.searchParams.get('rId');
			console.log('rId from URL:', rId);
		} else {
			rId = '';
			console.log('No rId in URL');
		}
	});
</script>

<section class="request-result flex max-w-5xl flex-col items-center justify-center py-6 px-12">
	<div class="flex flex-col items-center rounded-xl border border-gray-300 p-12">
		<a href="/" class="contents">
			<img src="/images/aw-logo-burg.png" alt="" class="mb-12 px-12" />
		</a>
		<p class="text-center">
			{#each requests as request}
				{#if request.id == rId}
					Thank you <strong>{request.firstname}</strong> for requesting a song. <br /> We will play
					<strong>{request.song}</strong> for you shortly.
				{/if}
			{/each}
		</p>
		{#each requests as request}
			{#if request.id == rId}
				<p class="text-center"><span class="font-bold">Comments:</span><br /> {request.comments}</p>
			{/if}
		{/each}

		<h5 class="mt-6 text-center">Like our music? Support us!</h5>
		<div class="flex">
			<a
				href="/tips"
				class="btn mr-6 flex bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
				>Send a Tip</a
			>
			<a href="https://acaciawoodmusic.com/contact/" class="btn flex bg-gray-600 text-white hover:bg-gray-500 hover:text-white"
				>Follow Us</a
			>
		</div>
	</div>
</section>
