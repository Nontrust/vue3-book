<template>
  
</template>

<script>
import {ref, readonly, provide} from 'vue'
export default {
    name : 'TodoListContainer',
    setup() {
        const todos = ref([])
        
        const initTodos = (init_todos) =>{
            todos.value = init_todos
        }

        const addTodo = (todo, date) => {}
        const removeTodo = (id) => {}
        const completeTodo = (id) => {}

        provide('todos', readonly(todos))
        provide('addTodo', readonly(addTodo))
        provide('removeTodo', readonly(removeTodo))
        provide('completeTodo', readonly(completeTodo))
    }

    // async created(){
    
    // }

    
}
</script>

<style>

</style>