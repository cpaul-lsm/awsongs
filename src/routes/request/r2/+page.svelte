<!-- +page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';
	import { enhance } from '$app/forms';

	const { page } = getStores();
	const { data } = $props();

	let songs = data.songs || [];
	let requests = data.requests || [];
	let songPick = $state('');
	let rId = $state('');
	let errorMessage = $state('');
	let isSubmitting = $state(false); // Add loading state for debugging

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

<section class="request flex max-w-5xl flex-col items-center justify-center py-6">
	<form 
		method="POST" 
		use:enhance={() => {
			isSubmitting = true; // Set submitting state
			console.log('Form submitted with:', { rId, songPick }); // Debug log
			return async ({ result }) => {
				isSubmitting = false; // Reset submitting state
				console.log('Form result:', result); // Debug log
				if (result.type === 'success') {
					console.log('Success, redirecting to:', `/request/r3/?rId=${rId}`);
					window.location.href = `/request/r3/?rId=${rId}`;
				} else if (result.type === 'failure') {
					errorMessage = result.data?.message || 'Failed to submit request';
					console.error('Form failure:', errorMessage);
				}
			};
		}}
		class="w-2/3 rounded-xl border border-gray-300 p-6"
	>
		<input type="hidden" name="rId" value={rId} />
		
		<div class="text-center">
			<a href="/" class="contents">
				<img src="/images/aw-logo-burg.png" alt="" class="mb-6" />
			</a>
			{#each requests as request}
				{#if request.id == rId}
					<h4>Welcome {request.firstname}!</h4>
					<p>Comments: {request.comments}</p>
				{/if}
			{/each}
			<p class="md:text-lg">Pick a song from our list below.</p>
			
			{#if errorMessage}
				<p class="text-red-500 mt-2">{errorMessage}</p>
			{/if}
			{#if isSubmitting}
				<p class="text-blue-500 mt-2">Submitting...</p>
			{/if}
		</div>

		<div class="flex flex-col items-start">
			{#each songs as song}
				<div class="form-control">
					<label class="label cursor-pointer">
						<input
							type="radio"
							name="songchecked"
							id={song.title}
							class="radio"
							value="{song.title} ({song.artist})"
							bind:group={songPick}
						/>
						<span class="label-text ml-4">{song.title} ({song.artist})</span>
					</label>
				</div>
			{/each}
		</div>

		<div class="songpick my-12 font-bold">
			<p>You have picked {songPick || 'no song yet'}</p>
		</div>

		<div class="flex justify-center">
			<button
				type="submit"
				class="btn flex justify-center bg-gray-700 text-white hover:bg-gray-800"
				disabled={isSubmitting || !songPick} 
			>
				{#if isSubmitting}
					Submitting...
				{:else}
					Send your request
				{/if}
			</button>
		</div>
	</form>
</section>