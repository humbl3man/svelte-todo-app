<script>
  import { fade, scale } from 'svelte/transition';
  import { TodoStore } from '../stores/Todo';
  import TodoItem from './TodoItem.svelte';

  $: completed = $TodoStore.filter((t) => t.completed);
  $: inProgress = $TodoStore.filter((t) => !t.completed);
</script>

<h2 class="my-2 font-bold">In Progress</h2>
<div>
  {#each inProgress as item (item.id)}
    <p in:fade out:fade>
      <TodoItem {item} />
    </p>
  {:else}
    <p>No items in progress...</p>
  {/each}
</div>

<h2 class="my-2 font-bold">Completed</h2>
<div>
  {#each completed as item (item.id)}
    <p in:fade out:fade>
      <TodoItem {item} />
    </p>
  {:else}
    <p>No items completed...</p>
  {/each}
</div>
