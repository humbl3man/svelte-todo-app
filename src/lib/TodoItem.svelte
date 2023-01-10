<script>
  import { TodoStore } from '../stores/Todo';

  export let item;

  function toggleTodo() {
    TodoStore.update((currentTodos) => {
      return currentTodos.map((t) => {
        if (t.id === item.id) {
          t.completed = !t.completed;
        }
        return t;
      });
    });
  }

  function deleteTodo() {
    TodoStore.update((currentTodos) => {
      return currentTodos.filter((t) => t.id !== item.id);
    });
  }
</script>

<div class="bg-white px-2 py-3 my-4 rounded-md shadow-sm relative">
  <button on:click={deleteTodo} class="absolute flex items-center justify-center -top-[5px] -right-[5px] bg-red-300 text-black rounded-full leading-none text-xl p-1 w-6 h-6"
    >&times;</button
  >
  <label class="cursor-pointer inline-block" class:line-through={item.completed} class:text-gray-500={item.completed}
    ><input type="checkbox" checked={item.completed} on:click={toggleTodo} /> <span>{item.name}</span></label
  >
</div>
