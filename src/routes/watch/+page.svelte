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
</script>

<section class="watch mx-auto flex max-w-5xl flex-col items-center justify-center">
	<p class="text-lg mt-6">Requested Songs on {formattedDate}</p>
	<table class="table table-zebra">
		<thead>
			<tr class="bg-gray-800 text-lg text-white">
				<th>Name</th>
				<th>Song</th>
				<th>Time</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedRequests as request}
				<tr>
					<td>{request.firstname}</td>
					<td>{request.song}</td>
					<td>{request.requestedAt}</td>
				</tr>
				<tr><td colspan="3">"{request.comments}""</td></tr>
			{/each}
		</tbody>
	</table>
</section>
