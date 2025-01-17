<script lang="ts">
	// Function to get current time
	function getCurrentTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	}

	// Function to get today's date
	function getTodayDate() {
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, '0');
		const day = String(now.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	// Set current time in a variable
	const currentTime = getCurrentTime();

	// Set today's date in a variable
	const todaysDate = getTodayDate();

	const id = Math.floor(Math.random() * 1000000);

	const requestDetails = $state({
		id: id,
		date: todaysDate,
		time: currentTime,
		firstname: '',
		comments: ''
	});

	let errorMessage = $state('');

	import { goto } from '$app/navigation';

	const submitForm = async (e: Event) => {
		e.preventDefault();

		const { id, date, time, firstname, comments } = requestDetails;

		const formDataToSubmit = {
			id,
			date,
			time,
			song: '', // Add song selection logic if needed
			firstname,
			comments
		};

		try {

			// Ensure the fetch URL is correctly pointing to the API endpoint
			const response = await fetch('/api/add-request', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formDataToSubmit)
			});

			if (response.ok) {
				// Add the request ID to the URL parameters
				goto(`/request/r2?requestId=${id}`);
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
	<form onsubmit={submitForm} action="/request/r2" class="w-2/3 rounded-xl border border-gray-300 p-6">
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
		<label class="input input-bordered flex items-center gap-2">
			<i class="bi bi-person-fill opacity-70"></i>
			<input
				type="text"
				name="firstname"
				class="w-11/12"
				bind:value={requestDetails.firstname}
				placeholder="First name"
			/>
		</label>

		<textarea
			placeholder="Dedication or Comment"
			class="textarea textarea-bordered mt-6 w-11/12"
			bind:value={requestDetails.comments}
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