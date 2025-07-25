<script lang="ts">
     import type { PageData } from './$types';
     import { enhance } from '$app/forms';
  
  	export let data: PageData;
  	export let form: any;

	  $: if (data && data.requests) {
      console.log("Requests data:", data.requests);
    }

	let requests = data.requests || [];
	let showClearConfirmation = false;

	const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

	// Sort the requests by time descending
    const sortedRequests = requests.slice().sort((a: any, b: any) => {
        return new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime();
    });

	// Function to determine if a row should have gray background
	function getRowClass(index: number): string {
		return index % 2 === 0 ? 'bg-blue-100' : 'bg-white';
	}

	function showConfirmation() {
		showClearConfirmation = true;
	}

	function hideConfirmation() {
		showClearConfirmation = false;
	}

	function handleClearSuccess() {
		hideConfirmation();
		// Refresh the page to show updated data
		window.location.reload();
	}
</script>

<section class="watch mx-auto flex max-w-5xl flex-col items-center justify-center">
	<p class="text-lg mt-6">Requested Songs on {formattedDate}</p>
	<table class="table">
		<thead>
			<tr class="bg-gray-800 text-lg text-white">
				<th>Name</th>
				<th>Song</th>
				<th>Time</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedRequests as request, index}
				<tr class={getRowClass(index)}>
					<td>{request.firstname}</td>
					<td>{request.song}</td>
					<td>{new Date(request.requestedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
				</tr>
				{#if request.comments && request.comments.trim()}
					<tr class={getRowClass(index)}><td colspan="3">"{request.comments}"</td></tr>
				{/if}
			{/each}
		</tbody>
	</table>
	<div class="flex justify-center gap-4">
		<a href="/request/" class="btn-gray">Back to Requests</a>
		<button on:click={showConfirmation} class="btn-gray bg-red-600 hover:bg-red-700">Clear Requests</button>
	</div>
</section>

<!-- Confirmation Modal -->
{#if showClearConfirmation}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
			<h3 class="text-lg font-semibold text-gray-900 mb-4">Confirm Clear</h3>
			<p class="text-gray-600 mb-6">
				Are you sure you want to clear all {sortedRequests.length} requests? This will hide them from the public view.
			</p>
			<div class="flex justify-end gap-3">
				<button 
					on:click={hideConfirmation}
					class="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
				>
					Cancel
				</button>
				<form 
					method="POST" 
					action="?/clearAllRequests"
					use:enhance={() => {
						return async ({ result }) => {
							if (result.type === 'success') {
								handleClearSuccess();
							}
						};
					}}
				>
					<button 
						type="submit"
						class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
					>
						Clear All
					</button>
				</form>
			</div>
		</div>
	</div>
{/if}

<!-- Success/Error Messages -->
{#if form?.message}
	<div class="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
		{form.message}
	</div>
{/if}

{#if form?.error}
	<div class="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
		{form.error}
	</div>
{/if}
