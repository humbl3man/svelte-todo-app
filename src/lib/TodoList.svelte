<script lang="ts">
  import { slide, fly } from 'svelte/transition';
  import { TodoStore } from '../stores/Todo';
  import TodoItem from './TodoItem.svelte';

  $: completed = $TodoStore.filter((t) => t.completed);
  $: inProgress = $TodoStore.filter((t) => !t.completed);
  $: {
    if (inProgress.length > 0) {
      document.title = `Svelte Todo (${inProgress.length} in progress)`;
    } else {
      document.title = 'Svelte Todo!';
    }
  }
</script>

<h2 class="mt-8 font-bold">In Progress ({inProgress.length})</h2>
<div class="py-4 mb-8">
  {#each inProgress as item (item.id)}
    <p in:fly={{ duration: 200 }} out:slide={{ duration: 200 }}>
      <TodoItem {item} />
    </p>
  {:else}
    <p>No items in progress...</p>
  {/each}
</div>

<h2 class="mt-4 font-bold">Completed ({completed.length})</h2>
<div class="py-4">
  {#each completed as item (item.id)}
    <p in:fly out:slide>
      <TodoItem {item} />
    </p>
  {:else}
    <p>No items completed...</p>
  {/each}
</div>
