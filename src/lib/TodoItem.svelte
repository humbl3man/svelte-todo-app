<script>
  import { TodoStore } from '../stores/Todo';

  export let item;
  export let isEditing = false;
  export let editValue = item.name;
  export let toggleEditMode = undefined;
  export let onEditComplete = undefined;

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

  function updateTodo(id, newValue) {
    if (!newValue) return;

    TodoStore.update((currentTodos) => {
      const index = currentTodos.indexOf(id);
      currentTodos = [
        ...currentTodos.slice(0, index),
        {
          ...currentTodos[index],
          text: newValue
        },
        ...currentTodos.slice(index + 1)
      ];
      onEditComplete(id);
    });
  }
</script>

<div class="bg-white px-2 py-3 my-4 rounded-md shadow-sm relative">
  {#if !item.completed}
    {#if isEditing}
      <form on:submit|preventDefault={() => updateTodo(item.id, editValue)}>
        <input type="text" bind:value={editValue} placeholder={editValue} />
        <button on:click={() => toggleEditMode(item.id)}>Cancel</button>
      </form>
    {:else}
      <button class="underline text-blue-600" on:click={() => toggleEditMode(item.id)}>Edit this item</button>
      <label class="cursor-pointer inline-block" class:text-gray-500={item.completed}
        ><input type="checkbox" checked={item.completed} on:click={toggleTodo} /> <span>{item.name}</span></label
      >
    {/if}
  {:else}
    <button on:click={deleteTodo} class="absolute flex items-center justify-center -top-[5px] -right-[5px] bg-red-300 text-black rounded-full leading-none text-xl p-1 w-6 h-6"
      >&times;</button
    >
    <label class="cursor-pointer inline-block line-through" class:text-gray-500={item.completed}
      ><input type="checkbox" checked={item.completed} on:click={toggleTodo} /> <span>{item.name}</span></label
    >
  {/if}
</div>
