<script>
  import { afterUpdate } from 'svelte';
  import TodoForm from './lib/TodoForm.svelte';
  import TodoList from './lib/TodoList.svelte';
  import TodoStats from './lib/TodoStats.svelte';

  afterUpdate(() => {
    console.log('App component updated');
  });
</script>

<main class="h-screen w-full pt-16 bg-slate-500">
  <div class="max-w-md mx-auto py-8 px-10 bg-slate-200 rounded-md drop-shadow-md">
    <TodoForm />
    <TodoStats />
    <TodoList />
  </div>
</main>
