<script>
  import { v4 as uuidv4 } from 'uuid';

  import { TodoStore } from '../stores/Todo';

  let text = '';
  let error = '';

  function handleSubmit() {
    if (text.length) {
      const newTodo = {
        id: uuidv4(),
        name: text,
        completed: false
      };

      TodoStore.update((currentTodos) => {
        return [newTodo, ...currentTodos];
      });

      text = '';
      error = '';
    } else {
      error = 'Todo text is required to create new todo!';
    }
  }

  function handleInputChange(e) {
    text = e.currentTarget.value;
    if (error && text.length > 0) {
      error = '';
    }
  }
</script>

<section class="mt-4">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="relative pb-8">
      <label class="sr-only" for="todo-text">Todo:</label>
      <input
        id="todo-text"
        class="w-full block p-2 border border-slate-700 shadow-sm rounded-md outline-"
        class:border-red-700={Boolean(error)}
        class:outline-red-700={Boolean(error)}
        type="text"
        on:input={handleInputChange}
        placeholder="Todo text..."
        bind:value={text}
      />
      {#if error}
        <div class="text-red-700 italic absolute bottom-0 left-0">{error}</div>
      {/if}
    </div>
  </form>
</section>
