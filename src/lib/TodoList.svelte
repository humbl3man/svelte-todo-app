<script>
  import { fade, scale } from 'svelte/transition';
  import { TodoStore } from '../stores/Todo';
  import TodoItem from './TodoItem.svelte';

  let editIds = [];

  function enterEditMode(e) {
    const id = e.detail;
    const index = editIds.indexOf(id);
    if (index !== -1) {
      editIds = [...editIds.slice(0, index), ...editIds.slice(index + 1)];
    } else {
      editIds = [...editIds, id];
    }
  }

  function exitEditMode(e) {
    const id = e.detail;
    const index = editIds.indexOf(id);
    editIds = [...editIds.slice(0, index), ...editIds.slice(index + 1)];
  }

  $: completed = $TodoStore.filter((t) => t.completed);
  $: inProgress = $TodoStore.filter((t) => !t.completed);
</script>

<h2 class="my-2 font-bold">In Progress</h2>
<div>
  {#each inProgress as item (item.id)}
    <p in:fade out:fade>
      <TodoItem {item} on:enterEditMode={enterEditMode} on:exitEditMode={exitEditMode} isEditing={editIds.indexOf(item.id) > -1} />
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
