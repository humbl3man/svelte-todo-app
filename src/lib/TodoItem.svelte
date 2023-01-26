<script>
  import { TodoStore } from '../stores/Todo';
  import EditIcon from 'svelte-icons/md/MdModeEdit.svelte';
  import { destroy_block } from 'svelte/internal';

  export let item;
  let isEditing = false;
  let editValue = item.name;

  // const dispatch = createEventDispatcher();

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
      isEditing = false;
      return currentTodos.map((t) => {
        if (t.id === id) {
          t.name = newValue;
        }
        return t;
      });
    });
  }

  function focusInEdit(inputEl) {
    console.log('create', inputEl);
    inputEl.focus();
    return {
      destroy() {
        console.log('destroy', inputEl);
      }
    };
  }
</script>

<div class="bg-white px-2 py-3 my-4 rounded-md shadow-sm relative flex items-center">
  {#if !item.completed}
    {#if isEditing}
      <form on:submit|preventDefault={() => updateTodo(item.id, editValue)}>
        <input
          type="text"
          bind:value={editValue}
          use:focusInEdit
          on:blur={() => {
            isEditing = false;
            editValue = item.name;
          }}
          placeholder={editValue}
          class="border py-1 px-2 bg-white w-full block"
        />
      </form>
    {:else}
      <label class="cursor-pointer inline-block" class:text-gray-500={item.completed}
        ><input type="checkbox" checked={item.completed} on:click={toggleTodo} /> <span>{item.name}</span></label
      >
      <button class="underline text-blue-600 text-sm ml-2" aria-label="Edit" on:click={() => (isEditing = true)}>
        <div class="w-6 h-6 text-black">
          <EditIcon />
        </div>
      </button>
    {/if}
  {:else}
    <label class="cursor-pointer inline-block line-through" class:text-gray-500={item.completed}
      ><input type="checkbox" checked={item.completed} on:click={toggleTodo} /> <span>{item.name}</span></label
    >
  {/if}
  <button on:click={deleteTodo} class="absolute flex items-center justify-center -top-[5px] -right-[5px] bg-red-300 text-black rounded-full leading-none text-xl p-1 w-6 h-6"
    >&times;</button
  >
</div>
