<!-- src/routes/request/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	
	const todaysDate = new Date().toLocaleDateString();
	const rId = Math.floor(Math.random() * 1000000);
	const requestDetails = $state({
		id: rId,
		requestedAt: todaysDate,
		firstname: '',
		comments: ''
	});

	let errorMessage = $state('');

</script>

<section class="request flex max-w-5xl flex-col items-center justify-center py-6">
	<form method="POST" 
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'success') {
				await goto(`/request/r2/?rId=${rId}`);
			} else if (result.type === 'failure') {
				errorMessage = result.data?.formResult?.error || 'Failed to submit request';
			}
		};
	}}
	class="w-2/3 rounded-xl border border-gray-300 p-6 text-gray-800">
		<div class="text-center">
			<a href="/" class="contents">
				<img src="/images/aw-logo-burg.png" alt="" class="mb-6" />
			</a>
			<p class="md:text-lg">
				We love to sing songs people enjoy. <br> Pick a song from our list and we will play it for you! <br
				/>
				<span class="text-sm"
					>You can also dedicate the song to someone or leave a message for us.</span
				>
			</p>
		</div>
		<input type="hidden" name="requestId" value="{rId}" />
		<label class="input input-bordered flex items-center gap-2 bg-white">
			<i class="bi bi-person-fill opacity-70"></i>
			<input
				type="text"
				name="firstname"
				bind:value={requestDetails.firstname}
				class="w-11/12"
				placeholder="First name (required)"
			/>
		</label>

		<textarea
		name = "comments"
		bind:value={requestDetails.comments}	
		placeholder="Dedication or Comment (optional)"
		class="textarea textarea-bordered mt-6 w-11/12 bg-white"
		></textarea>

		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{/if}

		<div class="flex justify-center">
			<button
				type="submit"
				class="btn flex justify-center bg-gray-700 text-white hover:bg-gray-800"
			>
				Get Started!</button
			>
		</div>
	</form>
</section>