import { reactive, toRefs } from 'vue'

export const useIdb = async (currentInstance) =>{
    const db = await currentInstance.appContext.config.globalProperties.$idb

    const KEY = 'todos'
    const storage_reactive = reactive({id:0})

    const transaction = db.transaction('todo-app', 'readwrite')
    const objectStore = transaction.objectStore('todos');

    const loadTodos = async (initTodos) => {
        const todos = await objectStore.getAll();

        /** 
         * todo의 last id 를 가져올 예정
         * */ 
        storage_reactive.id = todos.length

        console.log('todos', todos)
        initTodos(todos)
    }
    const saveTodo = async (todo) => {
        return await objectStore.add(todo);
    }
    const saveTodos = async (todos) => {
        await todos.array.forEach(todo => {
            objectStore.add(todo);
        });
    }

    const deleteTodo = async (id) => {
        return await objectStore.delete(id);
    }

    const updateTodo = async (todo, id = todo.id) => {
        todo.id = id
        return await objectStore.put(todo)
    }

    return {
        ...toRefs(storage_reactive),
        loadTodos,
        saveTodo,
        saveTodos,
        deleteTodo,
        updateTodo,
    }

}