<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://js.stripe.com/v3/buy-button.js';
		script.async = true;
		document.body.appendChild(script);
	});
</script>

<section class="events flex justify-center mx-auto lg:max-w-5xl py-6">
	
		<div class="w-3/4 text-center flex flex-col items-center p-6 border border-gray-300 rounded-xl">
			<a href="/" class="contents">
				<img src="/images/aw-logo-burg.png" alt="" class="w-1/2 md:w-3/4 mb-6" />
			</a>
			<h4>Send a Tip</h4>
			<p>We are so grateful for the support from our fans!</p>
		

		<stripe-buy-button
			buy-button-id="buy_btn_1QalQMGd4dXcXWISHFEVOVcp"
			publishable-key="pk_live_51QFOFfGd4dXcXWISqy7Jz286kyTW4RSKvN8xMM6oJ8qNuyTlB3lKmr1fUPeiTY8XdfuFl4b5z3RA4LCb0jzkPSSJ00jSX0LrJA"
		>
		</stripe-buy-button>
	</div>
</section>
