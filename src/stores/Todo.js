import { writable } from 'svelte/store';

const TodoStore = writable([
  {
    id: 1,
    name: 'Learn Svelte',
    completed: false
  },
  {
    id: 2,
    name: 'Learn React',
    completed: true
  },
  {
    id: 3,
    name: 'Learn SASS',
    completed: true
  }
]);

export { TodoStore };
