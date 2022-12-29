<script>
  import { fade, scale } from 'svelte/transition';
  import { TodoStore } from '../stores/Todo';
  import TodoItem from './TodoItem.svelte';
</script>

<ul>
  {#each $TodoStore as item (item.id)}
    <div in:scale out:fade>
      <TodoItem {item} />
    </div>
  {/each}
</ul>
