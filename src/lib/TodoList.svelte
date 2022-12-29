<script>
  import { fade, scale } from 'svelte/transition';
  import { TodoStore } from '../stores/Todo';
  import TodoItem from './TodoItem.svelte';

  $: completed = $TodoStore.filter((t) => t.completed);
  $: inProgress = $TodoStore.filter((t) => !t.completed);
</script>

<h2 class="my-2 font-bold">In Progress</h2>
{#if inProgress.length > 0}
  <ul>
    {#each inProgress as item (item.id)}
      <li in:fade out:fade>
        <TodoItem {item} />
      </li>
    {/each}
  </ul>
{:else}
  <p>Nothing in progress.</p>
{/if}

<h2 class="my-2 font-bold">Completed</h2>
{#if completed.length > 0}
  <ul>
    {#each completed as item (item.id)}
      <li in:fade out:fade>
        <TodoItem {item} />
      </li>
    {/each}
  </ul>
{:else}
  <p>Nothing in completed.</p>
{/if}
