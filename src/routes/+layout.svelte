<script>
    import '../../src/app.css';
    import '../../src/main.css';

    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    injectSpeedInsights();

</script>

<section class="app-layout pad-st bg-white">
    <main class="max-w-st flex flex-col justify-center">
        <slot />
    </main>
</section>