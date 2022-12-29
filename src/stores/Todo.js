import { writable } from 'svelte/store';

const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

const TodoStore = writable(initialTodos);
// update localStorage whenever todos state changes
TodoStore.subscribe((todos) => localStorage.setItem('todos', JSON.stringify(todos)));

export { TodoStore };
