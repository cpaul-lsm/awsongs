<script lang="ts">
	import { onMount } from 'svelte';
	import requests from '$lib/database/requests.json';

	let requestId = $state(0);

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		requestId = Number(urlParams.get('requestId')) || 0;
	});
</script>

<section class="request-result flex max-w-5xl flex-col items-center justify-center py-6">
	<div class="flex w-2/3 flex-col items-center rounded-xl border border-gray-300 p-12">
		<a href="/" class="contents">
			<img src="/images/aw-logo-burg.png" alt="" class="mb-12 px-12" />
		</a>
		<p class="text-center">
			{#each requests as request}
				{#if request.id == requestId}
					Thank you <strong>{request.firstname}</strong> for requesting a song. <br /> We will play
					<strong>{request.song}</strong> for you shortly.
				{/if}
			{/each}
		</p>
		{#each requests as request}
			{#if request.id == requestId}
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
			<a href="/contact" class="btn flex bg-gray-600 text-white hover:bg-gray-500 hover:text-white"
				>Follow Us</a
			>
		</div>
	</div>
</section>
