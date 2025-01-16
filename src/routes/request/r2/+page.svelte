<script lang="ts">
	import songs from '$lib/database/songlist.json';
	import requests from '$lib/database/requests.json';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let requestId = $state(0);
	let songPick = $state('');
	let errorMessage = '';


	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		requestId = Number(urlParams.get('requestId')) || 0;
	});

	$inspect(requestId, songPick);


	const submitForm = async (e: Event) => {
		e.preventDefault();

		const formDataToSubmit = {
			requestId,
			songPick, 
		};

		try {

			// Ensure the fetch URL is correctly pointing to the API endpoint
			const response = await fetch('/api/update-request', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formDataToSubmit)
			});

			if (response.ok) {
				// Add the request ID to the URL parameters
				goto(`/request/r3?requestId=${requestId}`);
			} else {
				errorMessage = 'Failed to submit the form. Please try again.';
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			errorMessage = 'An error occurred while submitting the form. Please try again.';
		}
	};
</script>

<section class="request flex max-w-5xl flex-col items-center justify-center py-6">
	<form onsubmit={submitForm} class="w-2/3 rounded-xl border border-gray-300 p-6">
		<div class="text-center">
			<a href="/" class="contents">
				<img src="/images/aw-logo-burg.png" alt="" class="mb-6" />
			</a>
			{#each requests as request}
				{#if request.id == requestId}
					<h4>Welcome {request.firstname}!</h4>

					<p>Comments: {request.comments}</p>
				{/if}
			{/each}
			<p class="md:text-lg">Pick a song from our list below.</p>
		</div>
		<div class="flex flex-col items-start">
		{#each songs as song}
			{#if song.requested === 'no' && song.category === 'general'}
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
						<span class="ml-4 label-text">{song.title} ({song.artist})</span>
					</label>
				</div>
			{/if}
		{/each}
		</div>
		<div class="songpick my-12 font-bold">
			<p>You have picked {songPick}</p>
		</div>
		<div class="flex justify-center">
			<button
				type="submit"
				class="btn flex justify-center bg-gray-700 text-white hover:bg-gray-800"
			>
				Send your request</button
			>
		</div>
	</form>
</section>
