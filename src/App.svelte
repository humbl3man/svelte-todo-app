<script>
  import { afterUpdate } from 'svelte';
  import TodoForm from './lib/TodoForm.svelte';
  import TodoList from './lib/TodoList.svelte';
  import TodoStats from './lib/TodoStats.svelte';
  import Modal from './lib/ui/Modal.svelte';

  let showAboutModal = false;

  function toggleAboutModal() {
    showAboutModal = !showAboutModal;
  }
  function handleAboutModalClose() {
    showAboutModal = false;
  }
</script>

<main class="h-screen w-full pt-16 bg-slate-500">
  <div class="max-w-md mx-auto py-8 px-10 bg-slate-200 rounded-md drop-shadow-md">
    <TodoForm />
    <TodoStats />
    <TodoList />
    <div class="text-center mt-6">
      <button class="underline text-blue-500 text-center" on:click={toggleAboutModal}>About this app</button>
    </div>
  </div>

  <Modal show={showAboutModal} onClose={handleAboutModalClose}>
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
