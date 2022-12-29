<script>
  import { TodoStore } from '../stores/Todo';

  $: completedCount = $TodoStore.filter((a) => a.completed).length;
  $: inProgressCount = $TodoStore.filter((a) => !a.completed).length;
</script>

<div class="flex justify-between items-center mb-8">
  <span>In Progress: {inProgressCount}</span>
  <span>Completed todos: {completedCount}</span>
</div>
