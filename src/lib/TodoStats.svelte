<script>
  import { TodoStore } from '../stores/Todo';
  console.log($TodoStore);

  $: count = $TodoStore.length;
  $: completedCount = $TodoStore.filter((a) => a.completed).length;
</script>

<div class="flex justify-between items-center mb-4">
  <span>Total items: {count}</span>
  <span>Completed todos: {completedCount}</span>
</div>
