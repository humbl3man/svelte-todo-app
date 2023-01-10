<script>
  import { blur, fade } from 'svelte/transition';
  export let show = false;
</script>

{#if show}
  <div on:keypress|self on:click|self in:fade out:fade class="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10">
    <div in:blur class="bg-white p-16 max-w-lg mt-12 mx-auto rounded-md shadow-md relative">
      <button class="absolute -top-4 right-0 bg-purple-500 text-white py-2 px-6 text-center rounded-md leading-none drop-shadow-lg sm:-right-4" on:click>Close</button>

      <h1 class="font-bold text-2xl mb-5">
        <slot name="heading" />
      </h1>
      <div class="leading-tight text-gray-700">
        <slot name="text" />
      </div>
    </div>
  </div>
{/if}
