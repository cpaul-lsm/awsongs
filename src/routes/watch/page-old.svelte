<script lang="ts">
    import requests from '$lib/database/requests.json';

	// Function to get today's date
    function getTodayDate() {
        const now = new Date();
        const options = { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const [{ value: month },,{ value: day },,{ value: year }] = formatter.formatToParts(now);
        return `${year}-${month}-${day}`;
    }

	function getNewDate() {
        const now = new Date();
        const options = { timeZone: 'America/New_York', year: 'numeric', month: 'long', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const [{ value: month },,{ value: day },,{ value: year }] = formatter.formatToParts(now);
        return `${month} ${day} ${year}`;
    }

    // Set today's date in a variable
    const todayDate = getTodayDate();
	const currentDate = getNewDate();

    // Sort the requests by time ascending
    const sortedRequests = requests.slice().sort((a, b) => {
        return new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time);
    });
</script>

<section class="watch mx-auto flex max-w-5xl flex-col items-center justify-center">
	<p class="text-lg mt-6">Requested Songs on {currentDate}</p>
	<table class="table table-zebra">
		<thead>
			<tr class="bg-gray-800 text-lg text-white">
				<th>Name</th>
				<th>Song</th>
				<th>Time</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedRequests as pick}
			{#if pick.date === todayDate}
				<tr>
					<td>{pick.firstname}</td>
					<td>{pick.song}</td>
					<td>{pick.time}</td>
				</tr>
				<tr><td colspan="3">"{pick.comments}""</td></tr>
			{/if}
			{/each}
		</tbody>
	</table>
</section>
