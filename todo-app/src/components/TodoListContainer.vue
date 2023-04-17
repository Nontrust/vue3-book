<template>
    <todo-list-add></todo-list-add>
</template>

<script>
import { ref, readonly, provide, getCurrentInstance } from 'vue'
import { useIdb } from '@compositions/idbStorage'

import TodoListAdd from '@components/TodoListAdd.vue'
import TodoListMain from '@components/TodoListMain.vue'

export default {
    name : 'TodoListContainer',
    setup() {
        const todos = ref([])
        const { saveTodos, loadTodos, deleteTodo, updateTodo } = useIdb(getCurrentInstance)
        
        const initTodos = (init_todos) => todos.value = init_todos

        const addTodo = (job, date) => {
            todos.value.push({
                job: job,
                date: date,
                completed: false,
            })
            saveTodos(todos)
        }
        const removeTodo = (id) => deleteTodo(id)
        const completeTodo = (id) => {
            const findTodoById = todos.value.find((todo)=>todo.id == id)
            findTodoById.completed = true
            updateTodo(findTodoById)
        }

        provide('todos', readonly(todos))
        provide('addTodo', readonly(addTodo))
        provide('removeTodo', readonly(removeTodo))
        provide('completeTodo', readonly(completeTodo))

        // loadTodos(initTodos)
    }

    // async created(){
    
    // }

    
}
</script>

<style>

</style>