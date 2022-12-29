<script>
  import TodoList from './lib/TodoList.svelte';
  import TodoStats from './lib/TodoStats.svelte';
</script>

<main class="h-screen w-full bg-slate-500">
  <div class="max-w-md mx-auto py-16 px-10 bg-slate-200 rounded-md">
    <TodoStats />
    <TodoList />
  </div>
</main>
