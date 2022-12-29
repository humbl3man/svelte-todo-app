<script>
  import { v4 as uuidv4 } from 'uuid';

  import { TodoStore } from '../stores/Todo';

  let text = '';

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
    }
  }

  function handleInputChange(e) {
    text = e.currentTarget.value;
  }
</script>

<section class="my-4">
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label class="sr-only" for="todo-text">Todo:</label>
      <input
        id="todo-text"
        class="w-full block p-2 border border-slate-700 shadow-sm rounded-md"
        type="text"
        on:input={handleInputChange}
        placeholder="Todo text..."
        bind:value={text}
      />
    </div>
  </form>
</section>
