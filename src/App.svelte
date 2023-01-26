<script lang="ts">
  import { fly, scale, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { TodoStore } from './stores/Todo';
  import TodoForm from './lib/TodoForm.svelte';
  import TodoList from './lib/TodoList.svelte';
  import Modal from './lib/ui/Modal.svelte';
  import { onMount } from 'svelte';

  let showAboutModal = false;

  let interval;
  let timer = 0;

  function toggleAboutModal() {
    showAboutModal = !showAboutModal;
  }

  function clearAllCompleted() {
    TodoStore.update((currentItems) => {
      return currentItems.filter((item) => !item.completed);
    });
  }

  onMount(() => {
    return () => clearInterval(interval);
  });

  $: itemsCompleted = $TodoStore.filter((t) => t.completed).length > 1;
</script>

<svelte:head>
  <meta name="description" content="Svelte Todo App" />
</svelte:head>
<!-- <svelte:body
  on:mouseenter={() => {
    timer = 0;
    clearInterval(interval);
  }}
  on:mouseleave={() =>
    (interval = setInterval(() => {
      timer++;
      console.log('interval', timer);
    }, 1000))}
/> -->
<svelte:window on:keydown={(e) => console.log('registered keydown event on window.', e.key, e.code)} />

<main class="h-screen w-full pt-16 bg-slate-500">
  <div transition:scale={{ duration: 400, easing: quintOut, start: 0, opacity: 0.2 }} class="max-w-md mx-auto p-8 bg-slate-200 rounded-md drop-shadow-md">
    <TodoForm />
    <TodoList />
    {#if itemsCompleted}
      <div class="flex justify-end">
        <button on:click={clearAllCompleted} class="bg-purple-100 text-purple-900 py-1 px-2 rounded-md text-sm border border-purple-800 hover:bg-purple-200"
          >Clear All Completed</button
        >
      </div>
    {/if}
    <div class="text-center mt-6">
      <button class="underline text-blue-500 text-center" on:click={toggleAboutModal}>About this app</button>
    </div>
  </div>

  <Modal show={showAboutModal} on:click={toggleAboutModal} on:keypress>
    <svelte:fragment slot="heading">About this App</svelte:fragment>
    <svelte:fragment slot="text">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero iusto a eaque quae ullam perspiciatis earum tenetur eos? Voluptatum id suscipit veritatis nam
        doloribus nisi unde, quasi nobis quis, maiores, harum nemo! Eveniet, enim vero. Fugiat expedita, dicta odio dolorem deleniti ratione beatae nesciunt necessitatibus magni,
        quia rerum eveniet autem nobis ipsum deserunt rem voluptate earum totam laborum laudantium? Aliquid esse blanditiis, dolor quidem maxime, quasi, repudiandae perspiciatis
        non ducimus maiores officia quisquam illo tempora. Ea reiciendis qui praesentium vel alias enim magni. In repellendus fuga quia mollitia perspiciatis deserunt illum, nam
        minus possimus ullam sint iste enim voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore cumque nesciunt tempora, rem dolor et nisi debitis expedita ipsa quos natus beatae voluptatibus harum
        eum exercitationem sapiente atque eligendi aliquam! Perferendis accusamus laboriosam itaque tempora aspernatur quia, consequuntur fugit sint ad sequi fuga, officiis
        mollitia ullam. Cupiditate earum officiis exercitationem?
      </p>
    </svelte:fragment>
  </Modal>
</main>
