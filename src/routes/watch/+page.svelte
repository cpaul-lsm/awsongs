<script lang="ts">
     import type { PageData } from './$types';
  
  	export let data: PageData;

	  $: if (data && data.requests) {
      console.log("Requests data:", data.requests);
    }

	let requests = data.requests || [];

	const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

	// Sort the requests by time ascending
    const sortedRequests = requests.slice().sort((a: any, b: any) => {
        return new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime();
    });

	// Function to determine if a row should have gray background
	function getRowClass(index: number): string {
		return index % 2 === 0 ? 'bg-blue-100' : 'bg-white';
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
	<div>
		<a href="/request/" class="btn-gray">Back to Requests</a>
	</div>
</section>
