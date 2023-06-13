<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  let loaded = false;
  onMount(() => (loaded = true));
</script>

<svelte:head>
  <title>Sveltekit Tailwind Starter</title>
</svelte:head>
{#if loaded}
  <h2
    class="bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 bg-clip-text font-Satoshi text-5xl font-black tracking-tight text-transparent shadow-sm sm:text-7xl"
    in:fly={{ y: 300, delay: 200, duration: 1400 }}
  >
    SvelteKit Tailwind<br />Starter.
  </h2>
  <p
    class="mx-auto mt-6 block max-w-xl bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 bg-clip-text font-Satoshi text-xl leading-8 text-gray-300 shadow-sm"
    in:fade={{ delay: 1000, duration: 2000 }}
  >
    A simple starter that contains sveltekit, tailwind and a custom font.
  </p>
{/if}
